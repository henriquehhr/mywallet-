import financialEventsRepositorie from "../repositories/financialEventsRepositorie.js";

async function newFinancialEvent (user, value, type) {

    const financialTypes = ["INCOME", "OUTCOME"];
    if (!financialTypes.includes(type)) {
        return res.sendStatus(422);
    }

    if (value < 0) {
        return res.sendStatus(422);
    }

    await financialEventsRepositorie.insertNewFinancialEvent(user, value, type);
}

async function getFinancialEvent (user) {
    return await financialEventsRepositorie.getFinancialEventByUser(user);
}

async function getTotalFinancialEventIncome (user) {

    const events = await financialEventsRepositorie.getFinancialEventByUser(user);
    
    const sum = events.rows.reduce(
    (total, event) =>
        event.type === "INCOME" ? total + event.value : total - event.value,
    0
    );

    return sum;
        
}

const financialEventsService = {newFinancialEvent, getFinancialEvent, getTotalFinancialEventIncome};

export default financialEventsService;