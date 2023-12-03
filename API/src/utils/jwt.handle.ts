import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET  || "clave secreta" ;

const signToken = async(id:string)=>{
    const jwt = sign({id}, JWT_SECRET,{
        expiresIn: "2h",
    });
    return jwt;
}

const verfyToken =()=>{

}

export {signToken, verfyToken};
