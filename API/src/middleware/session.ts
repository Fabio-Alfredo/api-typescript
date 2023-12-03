import { NextFunction, Request, Response, request } from "express"
import { JwtPayload, verify } from "jsonwebtoken";
import { verfyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req-ext.interface";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || " ";
        const jwt = jwtByUser.split(" ").pop();
        const verification = verfyToken(`${jwt}`) ;
        //" verification" contienen la informacion del usuario
        if (!verification) {
            res.status(401);
            res.send("NO_TIENES_UNA_SESION_VALIDA");
        } else {
            req.user = verification;
            next();
        }

    } catch (e) {
        res.status(400);
        res.send("Invalid jwt");
    }
}

export { checkJwt };