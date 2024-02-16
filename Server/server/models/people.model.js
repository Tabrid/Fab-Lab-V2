// personModel.js
import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    department: { type: String, required: true },
    role: { type: String, required: true },
    designation: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true } // Assuming you'll store the image path
});

const Person = mongoose.model('Person', personSchema);

export default Person;
