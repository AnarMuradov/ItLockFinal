import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())
const { Schema } = mongoose;

const workSchema = new Schema({
  img:String,
  title: String,
  text:String
});

const workModel = mongoose.model('Work', workSchema);


app.get('/',async (req, res) => {
    const works = await workModel.find()
  res.send(works)
})
app.get('/:id',async (req, res) => {
    const {id}=req.params
    const works = await workModel.findById(id)
    res.send(works)
  })
  
  app.post('/', async (req, res) => {
    const {img , title , text} =req.body
    const newWorks = new workModel({img,title,text})
    await newWorks.save()
    res.send(newWorks)
  })
   
  app.put('/:id',async (req, res) => {
    const {id}=req.params
    const {img,title,text} =req.body
    const works = await workModel.findByIdAndUpdate(id,{img,title,text})
    res.send(works)
  })
  
  app.delete('/:id',async (req, res) => {
    const {id}=req.params
    const works = await workModel.findByIdAndDelete(id)
    res.send('Got a DELETE request at /user')
  })

  mongoose.connect('mongodb+srv://anar:anar@cluster0.aeurkzy.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})