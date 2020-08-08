const express = require('express');
const path = require('path');
const app = express();
const members = require('./Members.js')
const logger = require('./middleware/logger.js');

app.use(logger);

app.use(express.static(path.join(__dirname,'public')));
// get all the members
app.get('/api/members', (req,res) => {
  res.json(members);
});

// get a single member

app.get('/api/members/:id', (req,res) => {
  res.json(members.filter((member) => {
    return member.id == req.params.id;
  }));
});
const PORT= process.env.PORT || 5000;

app.listen(PORT , () => console.log(`Server started on PORT ${PORT}`));
