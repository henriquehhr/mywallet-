import connection from "../config/database.js";

async function findUserByEmail (email) {
    return connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
    );
}

async function insertNewUser (name, email, hashedPassword) {
    connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
    );
}

const authenticationRepositorie = {findUserByEmail, insertNewUser};
export default authenticationRepositorie;