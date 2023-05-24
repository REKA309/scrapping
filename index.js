const express= require("express");
const dotenv=require("dotenv");
dotenv.config()

const nodeServer=express();
const getDataFromDB=require('./dbconifg')

const port=process.env.PORT;
const host=process.env.HOST;

nodeServer.get('/products', async (req, res) => {
    try {
      const data = await getDataFromDB();
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

nodeServer.listen(port,()=>{
    console.log("server started")
})

