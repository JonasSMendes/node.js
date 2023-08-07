import dotenv from 'dotenv'
import express, {Response, Request} from 'express'
import path from 'path';
import mustache from 'mustache-express'
import { mongoConect } from './dataBase/mongo';

dotenv.config();

mongoConect();

import mainRouter from './routes/index'

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache())


server.use(express.static(path.join(__dirname, '../public')))

server.use(express.urlencoded({extended: true}))

server.use(mainRouter);

server.use((req:Request,res:Response)=>{
    res.status(404).send('pagina não encontrada')
})

server.listen(process.env.PORT);