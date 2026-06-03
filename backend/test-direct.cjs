const { MongoClient } = require('mongodb');

// Direct connection without SRV DNS lookup
const uri = "mongodb://csampathsrc_db_user:sampath123@srcwelfarecluster.0gnn9zv.mongodb.net:27017/?ssl=true&authSource=admin&directConnection=true";

async function test() {
  console.log("Attempting direct connection...");
  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 10000,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  try {
    await client.connect();
    console.log("✅ SUCCESS! Connected to MongoDB Atlas!");
    const admin = client.db().admin();
    const dbs = await admin.listDatabases();
    console.log("Databases:", dbs.databases.map(db => db.name).join(", "));
    await client.close();
  } catch (err) {
    console.error("❌ Failed:", err.message);
  }
}

test();