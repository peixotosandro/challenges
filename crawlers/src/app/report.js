/* eslint-disable no-console */
module.exports = {
  printPosts(posts) {
    console.log(' ');
    console.log(' ');
    if (posts) {
      posts.forEach(post => {
        if (post.message) {
          console.log(`message:   ${post.message}`);
        } else if (post.error) {
          console.log(`error:     ${post.error}`);
        } else {
          console.log(`score:     ${post.score}`);
          console.log(`subreddit: ${post.subreddit}`);
          console.log(`title:     ${post.title}`);
          console.log(`comments:  ${post.comments}`);
          console.log(`link:      ${post.link}`);
        }
        console.log('-----------------------------');
      });
    }
  },
};
