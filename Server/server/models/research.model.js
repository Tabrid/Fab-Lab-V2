import mongoose from 'mongoose';

const researchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  authors: [{ 
    name: String, 
    image: String, 
    designation: String 
  }],
  category: { type: String, enum: ['ongoing', 'complete'], required: true },
  deadline: { type: Date, },
  publishedDate: { type: Date, }
});

const Research = mongoose.model('Research', researchSchema);

export default Research;
