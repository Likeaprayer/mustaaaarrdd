import * as AuthHandler from "../handlers/auth.handler"

import express from "express";
const router = express.Router();

router.post("/signup", AuthHandler.signup);
router.post("/login", AuthHandler.login);

export default router;