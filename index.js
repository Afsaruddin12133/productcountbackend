const express = require('express')
const app = express()
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Afsar uddin');
  })


const uri = `mongodb+srv://productcountdb:${process.env.MD_PASS}@cluster0.ucc3fpr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// api....


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})