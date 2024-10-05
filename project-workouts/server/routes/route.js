import express from "express";
import { createOne, deleteOne, getAll, getOne, updateOne } from "../controllers/controller.js";
const router = express.Router()

router.get("/", getAll)
router.post("/", createOne)
router.get("/:id", getOne)
router.put("/:id", updateOne)
router.delete("/:id", deleteOne)

export default router;