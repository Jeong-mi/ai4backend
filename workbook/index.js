var http = require("http");
var fs = require('fs')
//1. 함수 `onRequest()` 인자에 request와 response를 넣어줍니다.
function onRequest(req, res) {

  //응답의 콘텐츠 형식이 HTML인 파일을 가져옵니다.
  res.writeHead(200, { "Content-Type": "text/html" });

  fs.readFile('./index.html', 'utf8', (err, data) => {
    if(err){
      res.writeHead(404)
      console.log(err)
      return res.end("error!!!!!!!!1")
    }
    console.log(data)
    res.write(data)
    res.end()
  })
  console.log("비동기로 동작돼서 fs가 늦게 동작됨")
}

console.log('server start!!!!');

http.createServer(onRequest).listen(8080);