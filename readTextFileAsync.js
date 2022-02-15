const fs = require('fs');
console.log('시작...')

//비동기로 처리됨
fs.readFile('./news.txt', (err, data) => {
  if(err){
    console.log('Error...')
  }
  console.log('1번째 읽어오기', data.toString())
})

fs.readFile('./news.txt', (err, data) => {
  if(err){
    console.log('Error...')
  }
  console.log('2번째 읽어오기', data.toString())
})

fs.readFile('./news.txt', (err, data) => {
  if(err){
    console.log('Error...')
  }
  console.log('3번째 읽어오기', data.toString())
})