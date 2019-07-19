const readline = require('readline-sync');

module.exports = {
  askSubreddits() {
    return readline.question(
      'Type the subreddits separated by ";" ( e.g.: cats;worldnews;brazil ): '
    );
  },
};
