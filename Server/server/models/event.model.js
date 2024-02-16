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
  category: {
    type: String,
    enum: ['upcoming', 'complete'], // Define enum for valid options
    default: 'upcoming', // Set default value
  },
}
,{ timestamps: true }
);

const Event = mongoose.model('Event', eventSchema);

export default Event;
