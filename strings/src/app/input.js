const readline = require('readline-sync');

module.exports = {
  askText() {
    return readline.question('Type the text to be formatted: ');
  },
  askLimit() {
    return readline.question(
      'Type the width limit of each line (default is 40 characters): '
    );
  },
  askJustify() {
    return readline.question('Justify the text? (Y/n): ');
  },
};
