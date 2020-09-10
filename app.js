const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('你好,任淑凡')
})

app.listen(3000, '127.0.0.1', () => console.log('服务器已就绪'))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('进程已终止')
  })
})
// process.kill(process.pid, 'SIGTERM')