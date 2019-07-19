const RedditCrawler = require('./crawlers/RedditCrawler');
const input = require('./app/input');
const report = require('./app/report');

const start = () => {
  const subreddits = input.askSubreddits().split(';');

  subreddits.forEach(async subreddit => {
    const posts = await RedditCrawler.getPosts(subreddit.trim());

    report.printPosts(posts);
  });
};

start();
