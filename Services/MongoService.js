/*import mongoose from 'mongoose';
import userDetails from '../models/userDetails';

const User = mongoose.model('UserInfo');

app.get()




const {MongoClient} = require('mongodb');
// Replace the uri string with your connection string.
const uri =
  'mongodb+srv://nyenty:6MFRRVIVTQMZtCgq@cluster0.m496u7b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = {title: 'Back to the Future'};
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

export class MongoDBService {

const QueryPlants = () => {
    // Get currently logged in user
    const user = useUser();

    const getPlantByName = async name => {
      // Access linked MongoDB collection
      const mongodb = user.mongoClient('mongodb-atlas');
      const plants = mongodb.db('example').collection('plants');
      // Query the collection
      const response = await plants.findOne({name});

      return response;
    };
    // ...
  }

  const venusFlytrap = await plants.findOne({name: 'venus flytrap'});
  console.log('venusFlytrap', venusFlytrap);

  const perennials = await plants.find({type: 'perennial'});
  console.log('perennials', perennials);

  const numPlants = await plants.count();
  console.log(`There are ${numPlants} plants in the collection`);

  const insertOne = await plants.insertOne({
    name: 'lily of the valley',
    sunlight: 'full',
    color: 'white',
    type: 'perennial',
    _partition: 'Store 47',
  });
  console.log(insertOne);

  const insertMany = await plants.insertMany([
    {
      name: 'rhubarb',
      sunlight: 'full',
      color: 'red',
      type: 'perennial',
      _partition: 'Store 47',
    },
    {
      name: 'wisteria lilac',
      sunlight: 'partial',
      color: 'purple',
      type: 'perennial',
      _partition: 'Store 42',
    },
    {
      name: 'daffodil',
      sunlight: 'full',
      color: 'yellow',
      type: 'perennial',
      _partition: 'Store 42',
    },
  ]);
  console.log(insertMany);

  const updateOne = await plants.updateOne(
    {name: 'petunia'},
    {$set: {sunlight: 'partial'}},
  );
  console.log(updateOne);

  const updateMany = await plants.updateMany(
    {_partition: 'Store 47'},
    {$set: {_partition: 'Store 51'}},
  );
  console.log(result);

  const deleteOne = await plants.deleteOne({color: 'green'});
  console.log(result);

  const result = await plants.deleteMany({
    _partition: 'Store 51',
  });
  console.log(deleteOne);

}
*/
