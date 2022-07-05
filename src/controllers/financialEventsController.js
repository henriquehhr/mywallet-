import financialEventsService from "../services/financialEventsService.js";

export async function newFinancialEvent (req, res) {

    const { value, type } = req.body;
    const {user} = res.locals;

    if (!value || !type) {
        return res.sendStatus(422);
    }

    financialEventsService.newFinancialEvent(user, value, type);

    res.sendStatus(201);
}

export async function getFinancialEvent (req, res) {
    
    const {user} = res.locals;

    const events = financialEventsService.getFinancialEvent(user);

    res.send(events.rows);
}

export async function getTotalFinancialEventIncome (req, res) {
    
    const {user} = res.locals;

    const sum = await financialEventsService.getTotalFinancialEventIncome(user);
    
    res.send({ sum });
}