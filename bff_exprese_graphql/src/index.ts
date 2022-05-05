import express = require('express');
import axios, { AxiosRequestConfig } from "axios";

const PORT = 4000;
const app = express();

// 共通処理 ログインチェックなどをここで行う。
app.use((_req: any, _res, next) => {
  console.log('Login Check Start Time:', Date.now())

  const options: AxiosRequestConfig = {
    url: 'http://auth:8765/users/login_check',
    method: "GET",
    headers: {
      'Cookie':'PHPSESSID=' + _req.query.sid,
      'Content-Type':'application/json',
      'Accept':'application/json',
    }
  };

  axios(options)
  .then(response => {
      console.log('ログイン済');
      console.log('status:', response.status); // 200
      console.log('body:', response.data);     // response body.
      next();
    // catchでエラー時の挙動を定義する
    }).catch(_err => {
      console.log('未ログイン');
      _res.set({ 'Access-Control-Allow-Origin': '*' });
      _res.send('ログインして下さい');
    });

  console.log('Login Check End Time:', Date.now())
  _res.set({ 'Access-Control-Allow-Origin': '*' });

});

// マイクロサービスごとディレクトリ分ける
var app1Router = require('./app1/app1_route.ts');
app.use('/app1', app1Router );
app.listen(PORT, () => console.log('Listening on :4000'));

