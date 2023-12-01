import { Router, Request, Response } from "express";
import { getItem, getItems, postItem, updateItem, deleteItem } from "../controllers/item";

const router = Router()

router.get('/', getItems);
router.post('/', postItem);
router.get('/:id', getItem);
router.put('/:id',updateItem );
router.delete('/:id',deleteItem );

export { router };