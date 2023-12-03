import { Request, Response } from "express"
import UserModel from "../models/user"
import { User } from "../interfaces/user.interface";
import { encrypt, verfied } from "../utils/password.handle";
import { Auth } from "../interfaces/auth.interface";

const resgisterNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "ALREADY_USER";
    const passHash = await encrypt(password);
    const resgisterNewUser = await UserModel.create({ email, password: passHash, name })
    return resgisterNewUser;
}

const loginUser = async ({email, password}:Auth) => {
    const checkIs = await UserModel.findOne({email});
    if(!checkIs) return "NOT_FOUND_USER";
    const passwordHash = checkIs.password;
    const isCorrect = await verfied(password, passwordHash);

    if(!isCorrect) return "CREDENTIALS_INCORRECT";
    return checkIs;
}

export { resgisterNewUser, loginUser }