/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
const StringFormatter = require('./string/StringFormatter');
const input = require('./app/input');

const defaultInputText =
  'In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.\n' +
  '\n' +
  'And God said, "Let there be light," and there was light. God saw that the light was good, and he separated the light from the darkness. God called the light "day," and the darkness he called "night." And there was evening, and there was morning - the first day.';
const defaultLimit = 40;
const defaultJustify = true;

const start = () => {
  console.log('');
  let text = input.askText();
  let limit = input.askLimit();
  let justify = input.askJustify().toLowerCase();

  if (text.length <= 0) text = defaultInputText;
  if (limit.length <= 0 || isNaN(Number(limit))) limit = defaultLimit;
  if (justify === 'n' || justify === 'no') {
    justify = false;
  } else {
    justify = defaultJustify;
  }
  const stringFormatted = StringFormatter.format(text, limit, justify);

  console.log('');
  stringFormatted.forEach(line => {
    console.log(line);
  });
};

start();
