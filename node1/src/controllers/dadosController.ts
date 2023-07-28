import { Request, Response } from "express";

export const name =  (req: Request,res:Response)=>{

    let name:string = req.query.nome as string;
    let idade:string = req.query.idade as string;

    res.render('pages/nome',{
        name,
        idade
    })
}

export const AgeGET = (req: Request,res:Response)=>{
    res.render('pages/idade',{})
} 

export const AgePOST = (req: Request,res:Response)=>{
    let showAge:boolean = false 
    let idade: number = 0
    if(req.body.ano){
        let anoUser: number = parseInt(req.body.ano as string)
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoUser
        showAge = true
    }
    res.render('pages/idade',{
        idade,
        showAge
    })
}