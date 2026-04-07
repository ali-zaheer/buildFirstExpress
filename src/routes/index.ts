import express from 'express';
import teachers from "./api/teachers";
import students from "./api/students";
import contact from "./api/contact";

const routes = express.Router();

routes.use('/teachers',  teachers);
routes.use('/students',  students);
routes.use('/contact',  contact);   

export default routes;
