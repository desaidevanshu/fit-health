import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    number: String,
    password: String
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
