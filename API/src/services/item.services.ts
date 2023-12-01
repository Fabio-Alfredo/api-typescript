import ItemModel from "../models/item"
import { Car } from "../interfaces/car.interface"
import { response } from "express";

const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
}

const getCars = async () => {
    const responseItem = await ItemModel.find({});
    const data = responseItem ? responseItem : "NOUT_CARS";

    return data;
}

const getCar = async (id: string) => {
    const responseItem = await ItemModel.findOne({ _id: id });
    const data = responseItem ? responseItem : "CAR_NOT_FOUND";

    return data;
}

const updateCar = async (id: string, data: Car) => {
    const responseItem = await ItemModel.updateOne({ _id: id }, data)
    return responseItem;
}

const deleteCar = async (id:String) => {
    const responseItem = await ItemModel.deleteOne({_id:id});
    return responseItem;
}


export { insertCar, getCars, getCar, updateCar, deleteCar }