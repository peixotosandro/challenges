/* eslint-disable no-loop-func */

const format = (text, limit, justify) => {
  const originalLines = text.split(/\n|\r/);
  const linesFormmatted = [];

  originalLines.forEach(originalLine => {
    if (originalLine === '') {
      return;
    }

    const words = originalLine.replace(/[\n\r]/g, '').split(' ');

    const lines = [];
    let lineIndex = 0;

    lines[lineIndex] = '';

    words.forEach(word => {
      if (lines[lineIndex].length + word.length <= limit) {
        lines[lineIndex] += `${word} `;
      } else {
        lineIndex += 1;
        lines[lineIndex] = `${word} `;
      }
    });

    lines.forEach((line, index) => {
      line = line.trim();

      let differenceToLimit = limit - line.length;

      if (
        differenceToLimit > 0 &&
        justify &&
        index !== lines.length - 1 &&
        line.split(' ').length > 1
      ) {
        let anyCharacters = line.split('');
        let newLine;
        while (differenceToLimit > 0) {
          newLine = '';
          anyCharacters.forEach(anyCharacter => {
            if (anyCharacter === ' ') {
              if (differenceToLimit > 0) {
                anyCharacter += ' ';
                differenceToLimit -= 1;
              }
            }
            newLine += anyCharacter;
          });
          anyCharacters = newLine.split('');
        }
        linesFormmatted.push(newLine);
      } else {
        linesFormmatted.push(line);
      }
    });
    linesFormmatted.push('');
  });
  return linesFormmatted;
};

module.exports = {
  format,
};
