import { Request, Response } from "express";
import { Userss } from "../models/Userss";

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

export const addUsuario = async (req: Request,res:Response)=>{


    let name: string = req.body.nome;
    
    const use= await Userss.create({
        name: name,
      })

    res.render('/',{
        use
    })
}

export const addIdade = async (req: Request,res:Response)=>{

    let id: string = req.params.id;

    let results = await Userss.findAll({
        where:{
            id
        }
    })
    if(results.length > 0){
        let usuario = results[0]

        usuario.age++
        await usuario.save()
    }

    res.redirect('/')
}

export const diminuirIdade = async (req: Request,res:Response)=>{

    let id: string = req.params.id;

    let results = await Userss.findAll({
        where:{
            id
        }
    })
    if(results.length > 0){
        let usuario = results[0]

        usuario.age--
        await usuario.save()
    }

    res.redirect('/')

}
export const excluir = async (req: Request,res:Response)=>{

    let id: string = req.params.id;

    await Userss.destroy({
        where:{
            id
        }
    })

    res.redirect('/')
}