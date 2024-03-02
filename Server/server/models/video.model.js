import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  // You can add more fields as per your requirement
}
,{ timestamps: true });

const Video = mongoose.model('Video', videoSchema);

export default Video;
