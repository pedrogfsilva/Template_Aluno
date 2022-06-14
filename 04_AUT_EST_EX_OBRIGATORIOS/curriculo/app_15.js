const express = require('express'); 
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const hostname = '127.0.0.1';
const port = 3015;

const DBPATH = './database/curriculo.db';
const db = new sqlite3.Database(DBPATH);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.post('/curriculo', (req, res) =>{
  const firstName = req.body.nome;
  const lastName = req.body.sobrenome;
  const age = req.body.idade;
  const education = req.body.formacao;

  const sql = 'INSERT INTO curriculoPedro (nome, sobrenome, idade, formacao) VALUES (?, ?, ?, ?)';
  db.run(sql, [firstName, lastName, age, education], (err) =>{
    if(err){
      throw err;
    } else {
      res.send('Cadastrado com sucesso!');      
    }
  });
});

app.patch('/curriculo/:id', (req, res) =>{
  const { id } = req.params; 

  const firstName = req.body.nome;
  const lastName = req.body.sobrenome;
  const age = req.body.idade;
  const education = req.body.formacao;

  const sql = `UPDATE curriculoPedro SET nome = ?, sobrenome = ?, idade = ?, formacao = ? WHERE id = ${id}`;
  db.run(sql, [firstName, lastName, age, education], (err) =>{
    if(err){
      throw err;
    } else {
      res.send('Atualizado com sucesso!');
    }
  });
});

app.delete('/curriculo/:id', (req, res) =>{
  const { id } = req.params;

  const sql = `DELETE FROM curriculoPedro WHERE id = ${id}`;
  db.run(sql, [], (err) =>{
    if(err){
      throw err;
    } else {
      res.send('Deletado com sucesso!');
    }
  });
});

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});