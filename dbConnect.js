import { MongoClient } from 'mongodb';
import { credentials } from './credentials.js';

const mongoURI = credentials
const client = new MongoClient(mongoURI)
const database = client.db('garden')


export const plantCollection = database.collection('plants')
//lumps database.collection('plants') into one variable
