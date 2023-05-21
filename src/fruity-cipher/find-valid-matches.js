import fs from 'fs';

export function findValidMatches() {
  const wordList = fs.readFileSync('./dictionary.txt', 'utf-8');
  const results = [];
  wordList.split(/\r?\n/).forEach((line) =>  {
    if (line.length === 7 && line['1'] === 'e' && line[2] === 't' && line[3] === 't' && line[5] === 'r') {
      results.push(line);
    }
  });

  return results;
}

console.log(findValidMatches());
