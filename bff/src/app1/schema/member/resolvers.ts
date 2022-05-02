// 何をレスポンスするかの処理を書く。

var https = require('https');
var url = 'http://peraichi_web:8000';
https.get(url, function (res) { });


export const getMemberList = () => Promise.resolve(memberList);