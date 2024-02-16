// personRoutes.js
import express from 'express';
import { addPerson, deletePerson, updatePerson, getAllPeople, getPeopleByCategory,getPersonById } from '../controllers/people.controller.js';

const router = express.Router();

router.post('/add', addPerson);
router.delete('/delete/:id', deletePerson);
router.put('/update/:id', updatePerson);
router.get('/all', getAllPeople);
router.get('/get/:id', getPersonById );
router.get('/category/:category', getPeopleByCategory);

export default router;
