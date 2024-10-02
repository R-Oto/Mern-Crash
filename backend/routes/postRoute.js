import express from 'express';
const router = express.Router();
import connectDB from '../db/connectDB.js';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

// Retrieve all posts
router.route("/").get(async (req, res) => {
    try {
        let db = connectDB.getDB();
        let data = await db.collection("posts").find({}).toArray();
        if (data.length > 0) {
            res.json(data);
        } else {
            res.status(404).json({ message: "Data was not found :(" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Retrieve one post
router.route("/:id").get(async (req, res) => {
    try {
        let db = connectDB.getDB();
        let data = await db.collection("posts").findOne({ _id: new ObjectId(req.params.id) });
        if (data) {
            res.json(data);
        } else {
            res.status(404).json({ message: "Data was not found :(" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create one post
router.route("/").post(async (req, res) => {
    try {
        let db = connectDB.getDB();
        let mongoObject = {
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            author: req.body.author,
            dateCreated: req.body.dateCreated,
        };
        let data = await db.collection("posts").insertOne(mongoObject);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update one post
router.route("/:id").put(async (req, res) => {
    try {
        let db = connectDB.getDB();
        let mongoObject = {
            $set: {
                title: req.body.title,
                description: req.body.description,
                content: req.body.content,
                author: req.body.author,
                dateCreated: req.body.dateCreated,
            }
        };
        let data = await db.collection("posts").updateOne({ _id: new ObjectId(req.params.id) }, mongoObject);
        if (data.modifiedCount > 0) {
            res.json({ message: "Post updated successfully." });
        } else {
            res.status(404).json({ message: "Post not found." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete one post
router.route("/:id").delete(async (req, res) => {
    try {
        let db = connectDB.getDB();
        let data = await db.collection("posts").deleteOne({ _id: new ObjectId(req.params.id) });
        if (data.deletedCount > 0) {
            res.json({ message: "Post deleted successfully." });
        } else {
            res.status(404).json({ message: "Post not found." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
