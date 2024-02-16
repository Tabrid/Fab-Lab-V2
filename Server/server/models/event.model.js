// backend/models/Event.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: String,
  organizedBy: String,
  venue: String,
  descriptions: [{
    keypoint: String,
    tasks: [String],
  }],
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
