// researchController.js
import Research from "../models/research.model.js";
// Create a new research
export const createResearch = async (req, res) => {
  try {
    const research = new Research(req.body);
    await research.save();
    res.status(201).json({ message: 'Research created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all research
export const getAllResearch = async (req, res) => {
  try {
    const research = await Research.find();
    res.status(200).json(research);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get research by category
export const getResearchByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const research = await Research.find({ category });
    res.status(200).json(research);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};