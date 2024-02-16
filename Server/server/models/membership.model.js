// models/Membership.js
import mongoose from 'mongoose';

const MembershipSchema = new mongoose.Schema({
  fullName: String,
  diuEmail: String,
  mobileNumber: String,
  dob: Date,
  organization: String,
  studentId: String,
  department: String,
  socialMediaLink: String,
  portfolioLink: String,
  bloodGroup: String,
  photoDriveLink: String,
  skillDomains: [String],
  comments: String
});

const Membership = mongoose.model('Membership', MembershipSchema);

export default Membership;
