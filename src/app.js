import cors from "cors";
import express from "express";
import errorHandler from "./middlewares/errorHandler.js";

import authenticationRouter from "./routers/authenticationRouter.js";
import financialEventsRouter from "./routers/financialEventsRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(authenticationRouter);
app.use(financialEventsRouter);
app.use(errorHandler);

export default app;
