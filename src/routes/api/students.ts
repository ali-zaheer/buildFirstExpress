import express from 'express';

const students = express.Router();


students.get('/', (req, res) =>{
    res.send('This is students route')
});

export default students;