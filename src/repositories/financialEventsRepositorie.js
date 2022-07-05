import connection from "./../config/database.js";

async function insertNewFinancialEvent (user, value, type) {
    connection.query(
        `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
        [user.id, value, type]
    );
}

async function getFinancialEventByUser (user) {
    return connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
        [user.id]
        );
}

const financialEventsRepositorie = {insertNewFinancialEvent, getFinancialEventByUser};
export default financialEventsRepositorie;