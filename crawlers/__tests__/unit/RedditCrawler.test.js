/* eslint-disable no-undef */
const RedditCrawler = require('../../src/crawlers/RedditCrawler');

describe('Get posts from sugreddits', () => {
  it('should get posts from subreddit "cats".', async () => {
    const posts = await RedditCrawler.getPosts('cats');
    expect(posts[0].subreddit).toEqual('cats');
  }, 20000);

  it('should not get posts from unknow subreddit "aaa".', async () => {
    const posts = await RedditCrawler.getPosts('aaa');
    expect(posts[0].message).toEqual('No posts found for subreddit aaa.');
  }, 20000);

  it('should get posts with score of 5000 votes or more.', async () => {
    const posts = await RedditCrawler.getPosts('worldnews');
    let score5k = true;
    posts.forEach(post => {
      if (post.score < 5000) score5k = false;
    });
    expect(score5k).toBe(true);
  }, 20000);
});
