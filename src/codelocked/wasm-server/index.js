const express = require('express');
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.static('public'));

app.listen(4000, () => {
  console.log(`Servering public folder on port 4000`);
})
