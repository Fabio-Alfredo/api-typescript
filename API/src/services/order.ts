import ItemModel from "../models/item";

const getOrders = async () => {
    const responseItem = await ItemModel.find({});
    const data = responseItem ? responseItem : "NOUT_CARS";

    return data;
}


export {getOrders};