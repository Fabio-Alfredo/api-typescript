import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import {router} from "./routes"
import db from './config/mongo'

const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


db().then(()=>{
    console.log(`connectio`)
})

app.listen(PORT, ()=>console.log(`listo por el puerto ${PORT}`));





