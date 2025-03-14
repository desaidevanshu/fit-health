import express from 'express';
import Profile from '../models/Profile.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/setup', authMiddleware, async (req, res) => {
    const { height, weight, age, sport, level } = req.body;

    try {
        const profile = new Profile({ userId: req.user.userId, height, weight, age, sport, level });
        await profile.save();
        res.status(201).json({ message: 'Profile created', profile });
    } catch (error) {
        res.status(500).json({ message: 'Error creating profile', error });
    }
});

export default router;
