import { Response, Request } from "express";
import { Product } from "../models/Product";
import { Op } from "sequelize";

import { User } from "../models/User";


export const home = async (req: Request,res:Response)=>{
    //pegar as insformçãoes do banco de dados
    //organiza as informações
    //envia para o template engine   
   let users = await User.findAll({
        where: {
          age:{
            [Op.gte]: 0
          }
        },
        order: [
           
        ],
        //  offset: 0,
        // limit: 

    });

    /* const use = User.build({
        name: 'fulano',
        age: 25
    });
      await use.save();
    */
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
        lists:[],
        users
    })
}