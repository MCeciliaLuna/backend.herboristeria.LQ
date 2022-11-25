const express = require('express');
const app = express();
const connectDb = require("../db/database");
connectDb()
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const routes = require('../routes/routes')


const port = 8000

app.use(bodyParser.json())
app.use(cors());
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : './uploads'
}));

app.use("/", routes)

app.get('/', (req,res) => {
  res.json({
    message: "GET funcionando"
  })
})

app.listen(port, () => {
  console.log('Back funcionando en puerto ' + port)
})