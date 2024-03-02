import Image from '../models/image.model.js';

// Controller function to handle fetching all images
export const getAllImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller function to handle fetching an image by its ID
export const getImageById = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.json(image);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller function to handle adding a new image
export const addImage = async (req, res) => {
  const image = new Image({
    image: req.body.image
    // You can add more fields as per your requirement
  });

  try {
    const newImage = await image.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller function to handle updating an image
export const updateImage = async (req, res) => {
  try {
    const updatedImage = await Image.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedImage) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.json(updatedImage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller function to handle deleting an image
export const deleteImage = async (req, res) => {
  try {
    await Image.findByIdAndDelete(req.params.id);
    res.json({ message: 'Image deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
