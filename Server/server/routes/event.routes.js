// backend/routes/eventRoutes.js
import express from 'express';
import { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent,getEventsByCategory } from '../controllers/event.controller.js';

const router = express.Router();

router.post('/create', createEvent);
router.get('/all', getAllEvents);
router.get('/:id', getEventById);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);
router.get('/events/category/:category', getEventsByCategory);

export default router;
