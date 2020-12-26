if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.log('Please config your env MONGODB_URI first!');
  return 0;
}

const client = new MongoClient(uri, { useUnifiedTopology: true });
async function run() {
  try {
    await client.connect();
    const database = client.db('sample_mflix');
    const collection = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await collection.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
