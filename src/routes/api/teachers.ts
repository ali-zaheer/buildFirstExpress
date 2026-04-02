import express from 'express';

const teachers = express.Router();

teachers.get('/', (req, res) =>{
    res.send('This is teachers route');
})

export default teachers;