import express from "express";
import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController.js";
const router = express.Router();

import { adminAuth, userAuth } from "../utils/verifyToken.js";

router.put("/:id", userAuth, updateUser);

router.delete("/:id", adminAuth, deleteUser);

router.get("/:id", userAuth, getSingleUser);

router.get("/", adminAuth, getAllUser);

export default router;
