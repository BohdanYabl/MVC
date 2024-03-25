const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

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
  students.forEach(user => {
    userList += `<li><p>${user.fullName} - ${user.major}</p></li>`;
  });
  userList += '</ul>';
  res.send(userList);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});