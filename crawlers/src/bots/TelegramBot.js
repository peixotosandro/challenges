process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');
const RedditCrawler = require('../crawlers/RedditCrawler');

const TOKEN = '964726129:AAHfkGG-GJLvxpe5qcP4v0WS1Rx_fJIMV2E';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('new_chat_members', msg => {
  bot.sendMessage(
    msg.chat.id,
    `Hello ${msg.from.first_name}, get top reddit posts through the command /nadaprafazer <subreddits> separated by ";" ( e.g.: /nadaprafazer cats;worldnews;brazil )`
  );
});

const getPosts = (msg, match) => {
  const subreddits = match[1].split(';');

  subreddits.forEach(async subreddit => {
    bot.sendMessage(msg.chat.id, 'Please wait ...');
    const posts = await RedditCrawler.getPosts(subreddit.trim());
    posts.forEach(post => {
      if (post.message) {
        bot.sendMessage(msg.chat.id, post.message);
      } else if (post.error) {
        bot.sendMessage(msg.chat.id, 'Sorry, get some error. Try again later.');
      } else {
        bot.sendMessage(msg.chat.id, post.comments);
      }
    });
  });
};

bot.onText(/\/nadaprafazer (.*)/, getPosts);
