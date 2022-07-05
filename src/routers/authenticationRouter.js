import Router from "express";
import {signUp, signIn} from "../controllers/authenticationController.js";

const authenticationRouter = Router();

authenticationRouter.post("/sign-up", signUp);
authenticationRouter.post("/sign-in", signIn);

export default authenticationRouter;