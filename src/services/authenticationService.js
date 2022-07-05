import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import authenticationRepositorie from "./../repositories/authenticationRepositorie.js";

async function signUp (name, email, password) {
    const existingUsers = await authenticationRepositorie.findUserByEmail(email);

    if (existingUsers.rowCount > 0) {
        throw {type: "conflict", message: "email already in use"};
    }

    const hashedPassword = bcrypt.hashSync(password, 12);

    await authenticationRepositorie.insertNewUser(name, email, hashedPassword);
}

async function signIn (email, password) {
    const { rows } = await authenticationRepositorie.findUserByEmail(email);
    const [user] = rows;

    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw {type: "unauthorized", message: "incorrect email or password"};
    }

    const token = jwt.sign(
        {
        id: user.id,
        },
        process.env.JWT_SECRET
    );

    return token;
}

const authenticationService = {signUp, signIn};
export default authenticationService;