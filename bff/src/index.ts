import express = require('express');
const PORT = 4000;
const app = express();

// 共通処理 ログインチェックなどをここで行う。
app.use((_req, _res, next) => {
  console.log('Access Time:', Date.now())
  next()
})

// マイクロサービスごとディレクトリ分ける
var app1Router = require('./app1/app1_route.ts');
app.use('/app1', app1Router );

app.listen(PORT, () => console.log('Listening on :4000'));