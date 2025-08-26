const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// View All Students
router.get('/', async (req, res) => {
  const students = await Student.find();
  res.render('index', { students });
});

// Add Form
router.get('/add', async (req, res) => {
  const students = await Student.find();
  res.render('add', { students });
});


// Add Student
router.post('/add', async (req, res) => {
  const { name, rollNo, department, year, email } = req.body;
  await Student.create({ name, rollNo, department, year, email });
  res.redirect('/');
});

// Edit Form
router.get('/edit/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render('edit', { student });
});

// Update Student
router.put('/edit/:id', async (req, res) => {
  const { name, rollNo, department, year, email } = req.body;
  await Student.findByIdAndUpdate(req.params.id, { name, rollNo, department, year, email });
  res.redirect('/');
});

// Delete Student
router.delete('/delete/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
