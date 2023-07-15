const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'FundRaiser';


// async function getData(){
//     let result= await client.connect();
//     let db=result.db('FundRaiser');
//     let collection=db.collection('nodeJS');
//     let response=await collection.find({}).toArray();
//     console.log("res",response)
// }

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('nodeJS');
  
    // the following code examples can be pasted here...
  
    return 'done.';
  }

  
  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());