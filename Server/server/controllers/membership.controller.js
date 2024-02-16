// controllers/membershipController.js
import Membership from '../models/membership.model.js';

export const createMembership = async (req, res) => {
  try {
    const membership = new Membership(req.body);
    await membership.save();
    res.status(201).json({ message: 'Membership form submitted successfully', membership });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getMembership = async (req, res) => {
  try {
    const memberships = await Membership.find();
    res.status(200).json(memberships);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateMembership = async (req, res) => {
  try {
    const { id } = req.params;
    const membership = await Membership.findByIdAndUpdate(id, req.body, { new: true });
    if (!membership) {
      return res.status(404).json({ error: 'Membership not found' });
    }
    res.status(200).json({ message: 'Membership updated successfully', membership });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteMembership = async (req, res) => {
  try {
    const { id } = req.params;
    const membership = await Membership.findByIdAndDelete(id);
    if (!membership) {
      return res.status(404).json({ error: 'Membership not found' });
    }
    res.status(200).json({ message: 'Membership deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
