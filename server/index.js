const express = require('express');
const path = require('path');
const parser = require('body-parser');
const app = express();
const PORT = 1337;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../static')));

app.listen(PORT, () => {
  console.log('App is listening to port: ', PORT);
});
