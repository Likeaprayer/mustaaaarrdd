import * as UserHandler from "../handlers/user.handler";

import express from "express";
const router = express.Router();

router.get("/", UserHandler.getAllUsers);
router.get("/:id", UserHandler.getUserById);
router.post("/", UserHandler.createUser);
router.put("/:id", UserHandler.updateUser);
router.delete("/:id", UserHandler.deleteUser);

export default router;

