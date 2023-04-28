import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middlewares.js";
import { userSchema, loginSchema } from "../schemas/auth.schemas.js";
import { login, signUp, logout } from "../controllers/auth.controllers.js";
import { authValidate } from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema(userSchema), signUp);
authRouter.post("/login", validateSchema(loginSchema), login);
authRouter.post("/logout", authValidate, logout);

export default authRouter;
