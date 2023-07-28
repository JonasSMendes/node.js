import { Response, Request } from "express";
import { Product } from "../models/Product";

export const home =  (req: Request,res:Response)=>{
    //pegar as insformçãoes do banco de dados
    //organiza as informações
    //envia para o template engine
    
    let user = {
        name: 'jonas',
        age: 22
    }
    let showOld:boolean = false;
    
    if(user.age > 18){
        showOld = true
    }


    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);
    res.render('pages/home', {
        user: user,
        showOld,
        produts:list,
        Expensives: expensiveList,
        lists:[]
    })
}