import { Auth } from "./auth.interface";

export interface User extends Auth{
    name:string;
    password:string;
    email:string;
    description:string;
}