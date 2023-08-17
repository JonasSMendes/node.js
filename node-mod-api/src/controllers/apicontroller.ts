import { Request, Response } from "express";

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

export const uploadFile = (req: Request, res: Response)=>{
    console.log(req.files)


    res.json({})
}