const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate userId (example: check if it's a number)
  if (isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }
  // Simulate fetching user data (replace with your actual logic)
  const users = {
    1: { name: 'John Doe' },
    2: { name: 'Jane Smith' }
  };
  const user = users[userId];
  if (!user) {
    return res.status(404).send(`User with ID ${userId} not found`);
  }
  res.send(user);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});