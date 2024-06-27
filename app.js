const express = require("express");
const app = express();
const brokerrotes = require('./routes/brokerroutes')
const propertyroutes = require('./routes/propertyroutes')
app.use(express.json());
require('./dbconfig')

app.use('/broker',brokerrotes)
app.use('/property',propertyroutes)
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });