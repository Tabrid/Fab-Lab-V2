import express from 'express';
import { createResearch, getAllResearch, getResearchByCategory } from '../controllers/research.controller.js';

const router = express.Router();

// POST request to create new research
router.post('/research', createResearch);

// GET request to get all research
router.get('/research', getAllResearch);

// GET request to get research by category
router.get('/research/category/:category', getResearchByCategory);

export default router;
