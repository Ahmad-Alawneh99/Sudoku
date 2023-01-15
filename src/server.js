const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './src/views');
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
