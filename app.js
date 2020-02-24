var express = require('express');
var app = express();
var port = 3000;
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendfile('index.html');
});

app.get('/bf', (req, res) => {
  res.sendfile('public/bf.html');
});

app.get('/cod', (req, res) => {
  res.sendfile('public/cod.html');
});
app.get('/dmc', (req, res) => {
  res.sendfile('public/dmc.html');
});
app.get('/farcry', (req, res) => {
  res.sendfile('public/farcry.html');
});
app.get('/gta', (req, res) => {
  res.sendfile('public/gta.html');
});
app.get('/outlast', (req, res) => {
  res.sendfile('public/outlast.html');
});
app.get('/pes', (req, res) => {
  res.sendfile('public/pes.html');
});
app.get('sims', (req, res) => {
  res.sendfile('public/sims.html');
});

app.listen(port, () => {
  console.log(`App berjalan pada port ${port}`);
});
