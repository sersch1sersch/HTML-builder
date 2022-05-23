let fs = require('fs');
let path = require('path');

let itog = '';
let com = fs.ReadStream(path.resolve('01-read-file', 'text.txt'));
com.on('itog', (x) => {
  itog += x.toString();
});
com.on('end', () => {
  console.log(itog);
});
