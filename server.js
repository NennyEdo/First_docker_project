const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;
const DATA_FILE = "/app/data/students.json";

app.use(express.json());

// Load students from file, or use defaults
let students;
if (fs.existsSync(DATA_FILE)) {
  students = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
} else {
  students = [
    { id: 1, name: "Olalekan", course: "DevOps" },
    { id: 2, name: "Michael", course: "Cloud Engineering" },
  ];
}

// Save to file after every change
function saveStudents() {
  fs.writeFileSync(DATA_FILE, JSON.stringify(students, null, 2));
}

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
  saveStudents();
  res.status(201).json(newStudent);
});

// Delete a student
app.delete("/students/:id", (req, res) => {
  students = students.filter(s => s.id !== parseInt(req.params.id));
  saveStudents();
  res.json({ message: "Deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});