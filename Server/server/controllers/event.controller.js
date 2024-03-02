// backend/controllers/EventController.js
import Event from '../models/event.model.js';

// Create new event
export const createEvent = async (req, res) => {
  try {
    const eventData = new Event(req.body);
    await eventData.save();
    res.status(201).json({ message: 'Event data saved successfully.', eventData });
  } catch (error) {
    console.error('Error saving event data:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all events
export const getAllEvents = async (req, res) => {
  try {
    const eventList = await Event.find();
    res.status(200).json(eventList);
  } catch (error) {
    console.error('Error fetching event data:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get event by ID
export const getEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const eventData = await Event.findById(id);
    if (!eventData) {
      return res.status(404).json({ message: 'Event data not found' });
    }
    res.status(200).json(eventData);
  } catch (error) {
    console.error('Error fetching event data:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update event
export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, image, organizedBy, venue, descriptions } = req.body;
  try {
    const updatedEventData = await Event.findByIdAndUpdate(id, { title, image, organizedBy, venue, descriptions }, { new: true });
    if (!updatedEventData) {
      return res.status(404).json({ message: 'Event data not found' });
    }
    res.status(200).json({ message: 'Event data updated successfully.', updatedEventData });
  } catch (error) {
    console.error('Error updating event data:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete event
export const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEventData = await Event.findByIdAndDelete(id);
    if (!deletedEventData) {
      return res.status(404).json({ message: 'Event data not found' });
    }
    res.status(200).json({ message: 'Event data deleted successfully.', deletedEventData });
  } catch (error) {
    console.error('Error deleting event data:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getEventsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const events = await Event.find({ category });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};