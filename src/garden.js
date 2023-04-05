import { plantCollection } from '../dbConnect.js';
import { ObjectId } from 'mongodb';

export async function getAllPlants (req, res) {
  try {
    const allPlants = await plantCollection.find().toArray()
    res.send(allPlants)
  } catch (error) {
    res.status(500).send(error)
  }
}
//add a req?
//async function getAllPlants = (req , res) => {}
//findOne({name: ''}) don't use .toArray

export async function addPlant (req, res) {
  try {
    const dataBody = req.body;
    await plantCollection.insertOne(dataBody)
    res.status(201).send(dataBody)
  } catch (error) {
    res.status(500).send(error)
  }
}

export async function editPlant (req, res) {
  try {
    const dataBody = req.body;
    const docId = {'_id': new ObjectId (req.params.docId)}; 
    await plantCollection.findOneAndUpdate(
      {'_id': docId},
      {$set: { dataBody }}
    )
  } catch (error) {
    res.status(500).send(error)
  } finally {
    getAllPlants (req, res)
  }
}
//displays getAllPlants but skips the update

export async function deletePlant (req, res){
  try {
    const docId = {'_id': new ObjectId(req.params.docId)};
    await plantCollection.deleteOne(docId)
    res.send({ message: 'Plant has been Deleted'})
  } catch (error) {
    res.status(500).send(error)
  }
}

