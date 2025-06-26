import express from "express";
// import {createUser} from "../controller/user.controller.js";
import { createUser, authenticateUser, verifyAccount } from "../controller/user.controller.js";

import {body} from "express-validator";
const router = express.Router();


router.post("/",body("name","name is required ").notEmpty(),
body("email","email is required").notEmpty(),
body("email","Invalid email id").isEmail(),
body("password","password is requires").notEmpty(),
body("contact","contact number is required").notEmpty(),
body("contact","digits are allowed only").isNumeric().notEmpty(),createUser);

router.post("/authenticate ",authenticateUser);
router.post("/verification",verifyAccount);
export default router;