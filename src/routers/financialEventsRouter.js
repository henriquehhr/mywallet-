import Router from "express";
import { getFinancialEvent, getTotalFinancialEventIncome, newFinancialEvent } from "../controllers/financialEventsController.js";
import authenticateUser from "../middlewares/authenticationMiddleware.js";

const financialEventsRouter = Router();

financialEventsRouter.post("/financial-events", authenticateUser, newFinancialEvent);
financialEventsRouter.get("/financial-events", authenticateUser, getFinancialEvent);
financialEventsRouter.get("/financial-events/sum", authenticateUser, getTotalFinancialEventIncome);

export default financialEventsRouter;