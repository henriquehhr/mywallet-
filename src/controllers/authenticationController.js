import authenticationService from "../services/authenticationService.js";

export async function signUp (req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.sendStatus(422);
    }

    authenticationService.signUp(name, email, password);

    res.sendStatus(201);
}

export async function signIn (req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.sendStatus(422);
    }

    const token = authenticationService.signIn(email, password);

    res.send({
        token,
    });
}