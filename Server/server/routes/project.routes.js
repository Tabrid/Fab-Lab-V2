import express from "express";
import { getAllProjects, getProjectById, createProject, updateProject, deleteProject,getProjectsByCategory } from '../controllers/project.controller.js';

const router = express.Router();

// Get all projects
router.get('/projects', getAllProjects);

// Get project by ID
router.get('/projects/:id', getProjectById);

// Create new project
router.post('/projects', createProject);

// Update project
router.put('/projects/:id', updateProject);

// Delete project
router.delete('/projects/:id', deleteProject);
router.get("/projects/category/:category", getProjectsByCategory);
export default router;
