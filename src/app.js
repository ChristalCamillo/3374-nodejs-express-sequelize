// Por que estou usando CommonJS e não import-export? 
// Porque algumas ferramentas específicas do Sequelize, como a ferramenta de linha de comando que utilizaremos neste curso, funcionam melhor com CommonJS e ainda não se adaptaram tão bem ao import-export.
// Também é para mantermos uma compatibilidade com a documentação, que por enquanto está toda usando CommonJS.

const express = require('express');

const app = express();

app.use(express.json());

app.get('/teste', (req, res) => {
  res
    .status(200)
    .send({ mensagem: 'boas-vindas à API' });
});

module.exports = app;
