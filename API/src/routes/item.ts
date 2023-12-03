import { Router, Request, Response } from "express";
import { getItem, getItems, postItem, updateItem, deleteItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";
import { checkJwt } from "../middleware/session";

const router = Router()

router.get('/',checkJwt,  getItems);
router.get('/:id',checkJwt,  logMiddleware,  getItem);
router.post('/',checkJwt,  postItem);
router.delete('/:id',checkJwt, deleteItem );
router.put('/:id',checkJwt, updateItem );


export { router };