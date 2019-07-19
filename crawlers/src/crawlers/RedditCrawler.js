/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
const puppeteer = require('puppeteer');

const getPosts = async subreddit => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const minimumScore = 5000;

  await page.goto(`https://old.reddit.com/r/${subreddit}/top/?sort=top&t=week`);

  let moreResults = true;

  const postResult = [];

  while (moreResults) {
    try {
      const postData = await scrapePostsPage(page);

      if (!postData.length) moreResults = false;

      postData.forEach(post => {
        if (post.score >= minimumScore) {
          post.subreddit = subreddit;
          post.link = linkHandler(post);
          postResult.push(post);
        } else {
          moreResults = false;
        }
      });

      if (moreResults) {
        await page.goto(await getNextPageLink(page));
      }
    } catch (error) {
      await browser.close();

      return [
        {
          error: `Error while scraping reddit posts page. ${error.message}`,
        },
      ];
    }
  }

  await browser.close();

  if (!postResult.length) {
    postResult.push({ message: `No posts found for subreddit ${subreddit}.` });
  }

  return postResult;
};

const scrapePostsPage = page => {
  return page.evaluate(() => {
    const posts = [];
    const postList = document.querySelectorAll('div.thing[id]');
    postList.forEach(post => {
      const postJson = {};
      try {
        postJson.score = Number(
          post.querySelector('div.score.unvoted').getAttribute('title')
        );
        postJson.subreddit = '';
        postJson.title = post.querySelector('a.title').innerText;
        postJson.comments = post
          .querySelector('a.bylink.comments')
          .getAttribute('href');
        postJson.link = post.querySelector('a.title').getAttribute('href');
      } catch (error) {
        throw error;
      }
      posts.push(postJson);
    });
    return posts;
  });
};

const getNextPageLink = page => {
  return page.evaluate(() => {
    return document
      .querySelector(
        '#siteTable > div.nav-buttons > span > span.next-button > a'
      )
      .getAttribute('href');
  });
};

const linkHandler = post => {
  let { link } = post;
  if (post.link.startsWith('/r/')) {
    link = post.comments;
  }
  return link;
};

module.exports = {
  getPosts,
};
