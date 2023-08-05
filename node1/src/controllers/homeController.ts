import { Response, Request } from "express";
import { Product } from "../models/Product";
import { Op } from "sequelize";

import { User } from "../models/User";


export const home = async (req: Request,res:Response)=>{


  //deletar
 await User.destroy({
    where:{
      age:{
      [Op.lt]: 18
    }
    }
  })


//achar tudo
  let result = await User.findAll({
    where:{
      id: 7
    }
  })
  if(result.length > 0){
    let usuario = result[0];

    usuario.age = 70;
    usuario.name = 'testeteste'
    await usuario.save()
  }

  //atualizar
   await User.update({name: 'sr chico'}, {
    where:{
      id: 4
    }
   })

   let users = await User.findAll();
    
   
   //adicionar////////////////////////////////////
/*
   let name = ''
   if(req.body.nome){
      let addNome = req.body.nome

      name = addNome;
   }
   const use= await User.create({
    name: name,
  })
*/
   
 /////////////////////////////////////// 

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
        users,
        
    })
}