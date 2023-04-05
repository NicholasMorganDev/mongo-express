import express from 'express';
import cors from 'cors';

import { getAllPlants, addPlant, editPlant, deletePlant } from './src/garden.js';

const PORT = 3000;
const app = express()
app.use(cors())
app.use(express.json())

//API Points
app.get('/', (req, res) => {
  res.send('I am gRoot!')
})

app.get('/garden', getAllPlants)

app.post('/garden', addPlant)

app.patch('/garden/:docId', editPlant)

app.delete('/garden/:docId', deletePlant)

app.listen(PORT , () => {
  console.log(`Listening on http://localhost:${PORT}`)
})

