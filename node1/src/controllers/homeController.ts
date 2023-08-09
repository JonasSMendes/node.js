import { Response, Request } from "express";
import { Product } from "../models/Product";
import { Op } from "sequelize";
import User from "../models/User";
import { addUserAction } from "./dadosController";


export const home = async (req: Request,res:Response)=>{

//mongo
/*
  let usuario = await User.find({
    age: {$gte: 18}
  }).sort({ age: 1 }).skip(0).limit(2); 
 // console.log('usuarios', usuario);

 //inserir dados
/*
 let NewUser = await User.create({
  name: {firstName: 'pedro', lastName: 'moureira'},
  email: 'mona@gmail.com',
  age:31,
  interests: ['batucar', 'viajar']
 })
*/
/*
let NewUser = new User();

NewUser.name = {firstName: 'joana', LastName: 'silva'},
NewUser.email= 'jojo@gmail.com',
NewUser.age = 19,
NewUser.interests = ['dançar', 'pular']
let resultado = await NewUser.save()

console.log(resultado)
*/
/////////////////////////////////////////////////////////////////////////////////////////////

  //deletar
/* await User.destroy({
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
   const use = await User.create({
     name: name,
  })
*/
 /////////////////////////////////////// 
/*
let user = {
        name: 'jonas',
        age: 22
    }
    let showOld:boolean = false;
    
    if(user.age > 18){
        showOld = true
    }

*/
    //let list = Product.getAll();
    //let expensiveList = Product.getFromPriceAfter(12);
  
   let paulo = await User.findOne({name: 'name.firstName'});

   let user = await User.findOne({email: ''})

   

   let users = await User.find({}).sort({'name.firstName': 1})

    res.render('pages/home', {
      //  user: user,
      //  showOld,
      //  produts:list,
      //  Expensives: expensiveList,
        lists:[],
        users
    })
}

