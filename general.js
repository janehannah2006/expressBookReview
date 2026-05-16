const axios = require('axios');

async function getAllBooks() {
  const response = await axios.get('http://localhost:5000/');
  console.log(response.data);
}

async function getBookByISBN(isbn) {
  const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
  console.log(response.data);
}

async function getBookByAuthor(author) {
  const response = await axios.get(`http://localhost:5000/author/${author}`);
  console.log(response.data);
}

async function getBookByTitle(title) {
  const response = await axios.get(`http://localhost:5000/title/${title}`);
  console.log(response.data);
}
