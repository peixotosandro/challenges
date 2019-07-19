/* eslint-disable no-undef */
const StringFormatter = require('../../src/string/StringFormatter');

const inputText =
  'In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.\n' +
  '\n' +
  'And God said, "Let there be light," and there was light. God saw that the light was good, and he separated the light from the darkness. God called the light "day," and the darkness he called "night." And there was evening, and there was morning - the first day.';

describe('Format String', () => {
  it('should only format the string properly.', () => {
    expect(StringFormatter.format(inputText, 10, false)[0]).toEqual('In the');
    expect(StringFormatter.format(inputText, 40, false)[0]).toEqual(
      'In the beginning God created the heavens'
    );
    expect(StringFormatter.format(inputText, 56, false)[0]).toEqual(
      'In the beginning God created the heavens and the earth.'
    );
  });
  it('should format and justify the string properly.', () => {
    expect(StringFormatter.format(inputText, 10, true)[0]).toEqual(
      'In     the'
    );
    expect(StringFormatter.format(inputText, 40, true)[0]).toEqual(
      'In the beginning God created the heavens'
    );
    expect(StringFormatter.format(inputText, 56, true)[0]).toEqual(
      'In  the beginning God created the heavens and the earth.'
    );
  });
  it('should return the number of lines formatted.', () => {
    expect(StringFormatter.format(inputText, 15, false).length).toBe(37);
    expect(StringFormatter.format(inputText, 27, true).length).toBe(21);
    expect(StringFormatter.format(inputText, 49, true).length).toBe(12);
  });
});
