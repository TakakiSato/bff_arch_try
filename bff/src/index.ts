import express = require('express');
const PORT = 4000;
const app = express();

// マイクロサービスごとディレクトリ分ける
var app1Router = require('./app1/');
app.use('/app1', app1Router );

app.listen(PORT, () => console.log('Listening on :4000'));