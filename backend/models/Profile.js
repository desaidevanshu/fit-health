import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    height: Number,
    weight: Number,
    age: Number,
    sport: String,
    level: String
}, { timestamps: true });

export default mongoose.model('Profile', ProfileSchema);
