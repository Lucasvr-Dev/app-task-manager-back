const Task = require('../models/Task');

exports.list = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch {
    res.status(500).json({ message: 'Erro ao listar tarefas' });
  }
};

exports.getById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch {
    res.status(500).json({ message: 'Erro ao buscar tarefa' });
  }
};

exports.create = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch {
    res.status(400).json({ message: 'Erro ao criar tarefa' });
  }
};

exports.update = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch {
    res.status(400).json({ message: 'Erro ao atualizar tarefa' });
  }
};

exports.delete = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tarefa removida' });
  } catch {
    res.status(500).json({ message: 'Erro ao deletar tarefa' });
  }
};