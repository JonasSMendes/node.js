import express, {Request, Response, ErrorRequestHandler} from "express";
import path from "path";
import dotenv from 'dotenv'
import apiRoutes from './routes/api'
import cors from 'cors'
import { Multer, MulterError } from "multer";

dotenv.config()

const server = express();

server.use(cors())

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({extended: true}));

server.use(apiRoutes);

server.use((req: Request, res: Response)=>{
    res.status(404);
    res.json({error: 'não encontrado'});
});

const errorHandler:ErrorRequestHandler = (err, req, res, next) =>{
    res.status(400)//bad request

    if(err instanceof MulterError){
        res.json({error: err.code});
    }else{
        console.log(err)
        res.json({error: "ocorreu algum erro"});
    }
}

server.use(errorHandler)

server.listen(process.env.PORT);