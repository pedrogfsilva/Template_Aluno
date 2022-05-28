const express = require('express'); 
const sqlite3 = require('sqlite3').verbose();

const app = express();
const hostname = '127.0.0.1';
const port = 3015;

const DBPATH = './database/curriculo.db';
const db = new sqlite3.Database(DBPATH);

app.use(express.static("public"));

app.get('/curriculo', (req, res) =>{
  const sql = 'SELECT * FROM curriculoPedro';
  db.all(sql, [], (err, rows) =>{
    if(err){
      throw err;
    } else {
      res.json(rows);
    }
  });
});

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});