const express = require("express");
const app = express();
const brokerrotes = require('./routes/brokerroutes')
app.use(express.json());
require('./dbconfig')

app.use('/broker',brokerrotes)

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });