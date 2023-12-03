import { Request, Response, Router } from "express";
import { resgisterController, loginController } from "../controllers/auth";

const router = Router();

router.post("/register", resgisterController);
router.post("/login", loginController);


export {router};