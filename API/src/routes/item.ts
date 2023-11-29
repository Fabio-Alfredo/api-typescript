import { Router, Request, Response } from "express";
import { getItem, getItems, postItem } from "../controllers/item";

const router = Router()

router.get('/', getItems);
router.post('/', postItem);
router.get('/:id', getItem);

export { router };