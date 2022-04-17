const express = require ('express');
const res = require('express/lib/response');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app =express();
const port = 5000;


// ecoshop
// 3g55OEDu8wGbJgxJ
const uri = "mongodb+srv://ecoshop:3g55OEDu8wGbJgxJ@cluster0.ipq6z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




async function run(){
    try{
        
        await client.connect();
     
        app.get("/", async(req,res)=>{
            console.log("hitting database");

            const ecoshop= client.db('echoShop');
            const allProductCollection = ecoshop.collection("allProducts");
            const allProduct = await allProductCollection.find({}).toArray();
            console.log(allProduct);
            res.send(allProduct)

        })
        
    }
    finally {
        // await client.close();
      }
}

run().catch(console.dir);



app.listen(port, ()=>{
    console.log('listening port', port)
})