const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
const port = 3000 || process.env.PORT;

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://etaka:akash123@cluster0.tyigyp7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const database = client.db("etaka");
    const signUpUsers = database.collection("signUpUser");
    const users = database.collection("users");

    app.post("/register", async (req, res) => {
      const data = await req.body;
      console.log(data)
    });
  } finally {
    // Ensures that the client will close when you finish/error
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
