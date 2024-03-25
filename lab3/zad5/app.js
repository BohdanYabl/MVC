const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let students = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/student', (req, res) => {
  res.sendFile(__dirname + '/views/student.html');
});

app.get('/add-student', (req, res) => {
  res.sendFile(__dirname + '/views/add-student.html');
});

app.post('/student', (req, res) => {
  const { firstName, lastName, major } = req.body;
  const fullName = `${firstName} ${lastName}`;
  students.push({ fullName, major });
  res.sendFile(__dirname + '/views/student.html');
});

app.get('/students', (req, res) => {
  let userList = '<ul>';
  students.forEach((student, index) => {
    userList += `<li><p>${index + 1}. ${student.fullName} - ${student.major}</p></li>`;
  });
  userList += '</ul>';
  res.send(userList);
});

app.delete('/student/:id', (req, res) => { // zeby usunac studenta trzeba uzyc komendy "Invoke-WebRequest -Uri http://localhost:3003/student/0 -Method DELETE"
  const studentId = req.params.id;
  if (studentId >= 0 && studentId < students.length) {
    students.splice(studentId, 1);
    res.send('Student deleted successfully');
  } else {
    res.status(400).send('Invalid student ID');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
