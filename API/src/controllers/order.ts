import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/req-ext.interface";
  

const getItems = async (req:RequestExt, res:Response)=>{
    try{
        res.send({
            data: "solo para personas con jwt",
            user:req.user
        });
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEM", e);
    }
}


export {getItems};

