const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory student list
let students = [
  { id: 1, name: "Olalekan", course: "DevOps" },
  { id: 2, name: "Michael", course: "Cloud Engineering" },
];

// Home page
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Execute Tech Academy API", status: "running" });
});

// Get all students
app.get("/students", (req, res) => {
  res.json(students);
});

// Get one student
app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ error: "Student not found" });
  res.json(student);
});

// Add a student
app.post("/students", (req, res) => {
  const { name, course } = req.body;
  if (!name || !course) return res.status(400).json({ error: "name and course required" });
  const newStudent = { id: students.length + 1, name, course };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// Delete a student
app.delete("/students/:id", (req, res) => {
  students = students.filter(s => s.id !== parseInt(req.params.id));
  res.json({ message: "Deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
 