
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const helmet = require('helmet');
const admin = require("./routes/Login");
const internship = require("./routes/Internship");
const donation = require("./routes/Donation");

const app = express();
const {port, allowedDomains, mongoURI } = config;

if (!mongoURI) {
  console.error('MONGO_URI is not set. Add it to your .env file.');
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
 
  app.use(cors({
    origin: '*'
  }));

  app.use(helmet());
app.use(bodyParser.json());


// app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', admin);
app.use('/api/internship', internship);
app.use('/api/donation', donation);



app.get('/', (req, res) => {
  res.send('Hello World!');
});



const PORT = port || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
