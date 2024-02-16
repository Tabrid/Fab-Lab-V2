// personController.js
import Person from '../models/people.model.js';

export const addPerson = async (req, res) => {
    try {
        const { name, department, role, designation, category, image } = req.body;
        
        // Create a new Person instance
        const newPerson = new Person({
            name,
            department,
            role,
            designation,
            category,
            image
        });
        
        // Save the person to the database
        const savedPerson = await newPerson.save();

        res.status(201).json({ message: 'Person added successfully', data: savedPerson });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const deletePerson = async (req, res) => {
    try {
        const { id } = req.params;

        // Delete the person from the database
        await Person.findByIdAndDelete(id);

        res.status(200).json({ message: 'Person deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const updatePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        // Update the person in the database
        const updatedPerson = await Person.findByIdAndUpdate(id, updateData, { new: true });

        res.status(200).json({ message: 'Person updated successfully', data: updatedPerson });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getAllPeople = async (req, res) => {
    try {
        // Fetch all people from the database
        const allPeople = await Person.find();

        res.status(200).json({ data: allPeople });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getPeopleByCategory = async (req, res) => {
    try {
        const { category } = req.params;

        // Fetch people by category from the database
        const peopleByCategory = await Person.find({ category });

        res.status(200).json({ data: peopleByCategory });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getPersonById = async (req, res) => {
    try {
        const { id } = req.params;

        // Fetch person by ID from the database
        const person = await Person.findById(id);

        if (!person) {
            return res.status(404).json({ message: 'Person not found' });
        }

        res.status(200).json({ data: person });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
