const { MongoClient } = require('mongodb');

// MongoDB connection settings
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.CLUSTER}/${process.env.DBNAME}?retryWrites=true&w=majority`;
const dbName = `${process.env.DBNAME}`;
const collectionName =`${process.env.COLLECTION}`;

// Function to retrieve data from MongoDB
const getDataFromDB = async () => {
  try {
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const data = await collection.find().toArray();
    client.close();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data from the database');
  }
};

module.exports = getDataFromDB;

