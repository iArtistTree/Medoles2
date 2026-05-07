const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT || 3001 //Port chosen by host, defaults to 3001
app.use(cors())
app.use(express.json());

//Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL) //Secret
    .then(() => console.log('Connected to MongDB'))
    .catch((err) => console.error('Mongodb connection error:', err));


//Schema for applicant collection
const applicantSchema = new mongoose.Schema({
   firstname: String,
   lastname: String,
   email: String 
});

const Applicant = mongoose.model('Applicant', applicantSchema);

//api ENDPOINT
app.get('/applicants', async(req, res) => {
    const applicants = await Applicant.find({});
    res.json(applicants)
    console.log(res)
})

app.post('/applicants', async(req, res) =>{
    const {firstname, lastname, email} = await req.body;
    const newApplicant = new Applicant({firstname, lastname, email});
    await newApplicant.save();
    res.status(201).json(newApplicant)
})

//Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
