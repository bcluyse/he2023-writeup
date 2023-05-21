import fs from 'fs';

export function findTenLetterWordOptions() {
  // this word is relatively specific since it has 3 occurrences of kiwi and 2 of watermelon
  // so let's cross check with a 10 letter word list and only keep the matches
  //   const cipher = '🍉🥝🍅🥝🥦🍉🥝🍓🍍🥐'

  const wordList = fs.readFileSync('./dictionary.txt', 'utf-8');
  const results = [];
  wordList.split(/\r?\n/).forEach((line) =>  {
    if (line.length === 10) {
      const isMelon = line[0] === line[5];
      const isKiwi = line[1] === line[3] && line[3] === line[6];
      if (isMelon && isKiwi) {
        results.push(line);
      }
    }
  });

  return results;
}
