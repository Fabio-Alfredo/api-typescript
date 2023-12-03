import { Request, Response } from "express"
import { resgisterNewUser, loginUser } from "../services/auth"

const resgisterController = async ({ body }: Request, res: Response) => {
    const responseUser = await resgisterNewUser(body);
    res.send(responseUser);
}

const loginController = async ({ body }: Request, res: Response) => {
    const { email, password } = body;

    const responseUser = await loginUser({ email, password });
    if (responseUser === "CREDENTIALS_INCORRECT") {
        res.status(403);
        res.send(responseUser);
    } else {
        res.send(responseUser);
    }
}

export { resgisterController, loginController }