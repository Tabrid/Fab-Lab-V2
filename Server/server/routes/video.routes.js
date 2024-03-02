import express from 'express';
import { getAllVideos, getVideoById, addVideo, updateVideo, deleteVideo } from '../controllers/video.controller.js';

const router = express.Router();

// Route to fetch all videos
router.get('/videos', getAllVideos);

// Route to fetch a video by its ID
router.get('/videos/:id', getVideoById);

// Route to add a new video
router.post('/videos', addVideo);

// Route to update a video
router.put('/videos/:id', updateVideo);

// Route to delete a video
router.delete('/videos/:id', deleteVideo);

export default router;
