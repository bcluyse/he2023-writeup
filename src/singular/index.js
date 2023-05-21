const fs = require('fs');

function findUnique(data) {
    let result = data.split('\n').map(line => {
        return line.match(/he2023\{(.+)\}/)[1];
    });


    result = result.map(str => ({ count: (str.match(/[A-Z]/g) || []).length, flag: str })).filter((el) => el.count >= 1).map(({ flag }) => flag);
    console.log(result);
}

fs.readFile('./singular.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  findUnique(data)
});
