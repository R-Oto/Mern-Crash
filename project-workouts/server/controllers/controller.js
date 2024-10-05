import Workout from "../models/model.js";

export const getAll = async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createOne = async (req, res) => {
    const { title, load, reps } = req.body;

    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(201).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getOne = async (req, res) => {
    const id = req.params.id;
    try {
        const workout = await Workout.findById(id);
        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateOne = async (req, res) => {
    const id = req.params.id;
    const updates = req.body; 

    try {
        const workout = await Workout.findByIdAndUpdate(id, updates, { new: true }); 
        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' }); 
        }
        res.status(200).json(workout); 
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
};


export const deleteOne = async (req, res) => {
    const id = req.params.id;
    try {
        const workout = await Workout.findByIdAndDelete(id);
        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }
        res.status(200).json({ message: 'Workout deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
