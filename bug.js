const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  console.log('User ID:', userId);
  res.send(`User with ID ${userId} not found`);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});