const fs = require('fs')
//1번째 방법 - 옵션으로 인코딩 설정해주기
const data1 = fs.readFileSync('./news.txt', 'utf8')
console.log(data1)

//2번째 방법 - Buffer.toString()으로 인코딩
//toString 안하면 아래와 같이 나옴
//<Buffer ec 84 9c ec 9a b8 20 ea b0 95 eb 8f 99 ea b5 ac ec 97 90 20 ea b1 b0 ec a3 bc ed 95 98 ea b3 a0 20 ec 9e 88 eb 8a 94 20 ec a7 
//81 ec 9e a5 ec 9d b8 20 ... 238 more bytes>
//참고 사이트 : https://hbesthee.tistory.com/1675
const data2 = fs.readFileSync('./news.txt')
console.log(data2.toString())