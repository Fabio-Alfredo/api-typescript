import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRETA || "clavesecreta";

const signToken = (id: string) => {
    const jwt = sign({ id }, JWT_SECRET, {
        expiresIn: "2h",
    });
    return jwt;
};

const verfyToken = (jwt: string) => {

    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
}

export { signToken, verfyToken };
