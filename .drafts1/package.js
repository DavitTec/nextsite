// index.js
const path = require('path')
const fs = require('fs')

const filePath = path.resolve(__dirname, './package.json')

fs.readFile(filePath, (err, data) => {
  if(err){
    console.log('Something went wrong');
  } else {
    const obj = JSON.parse(data);
    console.log(obj);
  }
})
