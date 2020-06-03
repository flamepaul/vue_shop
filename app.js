
//导入express
const express = require('express')

//导入compression
const compression = require('compression')
//创建 web服务器
const app = express()

//一定要把这一行代码，写到静态资源前
app.use(compression())
//托管静态资源
app.use(express.static('./dist'))

//启动web服务器
app.listen(80, () =>{
    console.log('web server running at http://127.0.0.1')
})