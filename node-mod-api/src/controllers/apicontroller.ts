import {unlink} from 'fs/promises'
import { Request, Response } from "express";
import sharp from "sharp";

import { Phrase } from "../models/Phrase";

export const ping = (req: Request, res: Response) => {
    res.json({pong: true})
}

export const random =  (req: Request, res: Response)=>{
    let nRand:number = Math.floor(Math.random() * 100);
    res.json(nRand);
}

export const name = (req: Request, res: Response)=>{
    let nome: string = req.params.nome
    res.json(nome);
}

export const uploadFile = async (req: Request, res: Response)=>{
   if(req.file){
        const filename = `${req.file.filename}.jpg`

        await sharp(req.file.path)
            .resize(500)
            .toFormat('jpeg')
            .toFile(`./public/media${filename}`);

        await unlink(req.file.path);

        res.json({image: `${filename}`})
   }else{
        res.status(400)
        res.json({error: "algo deu errado"})    
   }
}