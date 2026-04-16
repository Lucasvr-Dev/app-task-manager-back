const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: '*'
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Task Manager funcionando' });
});

app.use('/api/tasks', require('./routes/taskRoutes'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log('Servidor rodando');
    });
  })
  .catch((err) => {
    console.log('Erro ao conectar no MongoDB:', err);
  });