const express = require('express');
const app = express();

app.get('/', function (req, res) {
    console.log('hook called');
  res.send('hello world')
});

app.listen(8080, () => console.log('App booted'));