import { Request, Response, request } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertCar, getCars, getCar } from "../services/item.services";

const getItem = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await getCar(id);
        res.send(response);
    }catch(express){
        handleHttp(res, 'ERROR_GET_ITEM');
        
    }

}

const postItem= async ({body}:Request, res:Response)=>{
    try{
        const responseItem =  await insertCar(body);
        res.send(responseItem);
    }catch(e){
        handleHttp(res, 'ERROR_POST_ITEM', e)
    }
}

const getItems = async (req: Request, res: Response) => {
    try{
        const response = await getCars();
        res.send(response);
    }catch(e){
        handleHttp(res, 'ERROR_GET_ITEM');
    }
}


export { getItems, getItem, postItem };