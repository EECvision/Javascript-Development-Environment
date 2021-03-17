import express from 'express';
import { join } from 'path';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/',(req, res)=>{
  res.sendFile(join(__dirname, '../dist/index.html'))
})

app.get('/users', (req, res)=>{
  res.json([
    {"id": 1, "firstName": "Bob", "lastName":"Salis", "email": "bobsalis@gmail.com"},
    {"id": 2, "firstName": "Jane","lastName":"Gloris", "email": "jsgloris@gmail.com"},
    {"id": 3, "firstName": "Eve", "lastName":"Benzika", "email": "eveben@gmail.com"},
  ])
})

app.listen(port, (err)=>{
  if(err){
    console.log(err)
  }else{
    console.log(`app running on port ${port}`);
  }
})
