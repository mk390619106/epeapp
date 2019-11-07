const express = require('express')
const app = express()
const bodyParser = require('body-parser') // 获取post请求的数据

// parse application/x-www-form-urlencoded  
app.use(bodyParser.urlencoded({ extended: false }))    

// parse application/json  
app.use(bodyParser.json())   


app.use(express.static('public'))
app.all('*', function(req, res, next) {
  // console.log("客户端请求头"); 
  // console.log(req.headers);
  // console.log("客户端请求头"); 
  res.header("Access-Control-Allow-Origin", req.headers.origin); // 允许客户端通过请求
  next()
})
app.post('/', (req, res) => {
  let data = req.body
  console.log('客户端数据');
  console.log(req.body);
  console.log('客户端数据');

  res.json({ status: 0, 你当前发送的数据是: data })
})
app.listen(80, () => console.log('Example app listening on port 3000!'))