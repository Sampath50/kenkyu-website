const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://csampathsrc_db_user:sampath123@srcwelfarecluster.0gnn9zv.mongodb.net/?retryWrites=true&w=majority";

async function test() {
  console.log("Attempting to connect to MongoDB Atlas...");
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log("✅ SUCCESS! Connected to MongoDB Atlas!");
    
    const admin = client.db().admin();
    const dbs = await admin.listDatabases();
    console.log("Available databases:", dbs.databases.map(db => db.name).join(", "));
    
    await client.close();
  } catch (err) {
    console.error("❌ Failed to connect:", err.message);
    console.error("\nFull error details:", err);
  }
}

test();