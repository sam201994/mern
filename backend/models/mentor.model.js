import mongoose from 'mongoose';

var MentorSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  location: { type: String, required: true },
  company:  { type: String, required: true },
  tasks: { type: Array, required: false , 'default': []},
});

export default mongoose.model('Mentor', MentorSchema);

