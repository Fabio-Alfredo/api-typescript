import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken";
import { verfyToken } from "../utils/jwt.handle";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || null;
        const jwt = jwtByUser?.split('').pop();
        const verification = verfyToken(`${jwt}`);
        //" verification" contienen la informacion del usuario
        if (!verification) {
            res.status(401);
            res.send("NO_TIENES_UNA_SESION_VALIDA");
        } else {
            console.log(jwtByUser);
            next();
        }


    } catch (e) {
        res.status(400);
        res.send("Invalid jwt");
    }
}

export { checkJwt };