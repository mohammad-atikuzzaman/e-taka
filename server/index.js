const express = require("express");
const cors = require("cors");
const bcrypt = require('bcryptjs');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port =process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

const uri = "mongodb+srv://etaka:akash123@cluster0.tyigyp7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");


    const database = client.db("etaka")
    const users = database.collection("users")

    app.post("/register", async(req, res)=>{
      const {name, email, phone, password, role} = req.body

      const hashPass = bcrypt.hashSync(password, 10)

      const existPhone = await users.findOne({phone: phone})
      const existEmail = await users.findOne({email: email})
      if(existEmail || existPhone){
        return res.send("User already exist")
      }

      const doc = {name, email, phone, password: hashPass, role, status: "pending"}
      const result = await users.insertOne(doc)
      res.send(result)
    })

    app.get()
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
