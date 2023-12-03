import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getOrders } from "../services/order";

const getItems = async (req:Request, res:Response)=>{
    try{
        res.send({
            data: "solo para personas con jwt"
        });
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEM", e);
    }
}


export {getItems};

