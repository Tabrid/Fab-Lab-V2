import express from 'express';
import { getAllImages, getImageById, addImage, updateImage, deleteImage } from '../controllers/image.controller.js';

const router = express.Router();

// Route to fetch all images
router.get('/images', getAllImages);

// Route to fetch an image by its ID
router.get('/images/:id', getImageById);

// Route to add a new image
router.post('/images', addImage);

// Route to update an image
router.put('/images/:id', updateImage);

// Route to delete an image
router.delete('/images/:id', deleteImage);

export default router;
