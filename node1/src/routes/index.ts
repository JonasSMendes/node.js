import { Router, Request, Response } from "express";

const router = Router()

router.get('/', (req: Request,res:Response)=>{
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

    res.render('pages/home', {
        user: user,
        showOld,
        produts:[
            {title:'bolo', price: 10},
            {title:'carne', price: 40},
            {title:'frango', price: 20}, 
        ],
        list:[]
    })
})

router.get('/contato', (req: Request,res:Response)=>{
    res.render('pages/contato')
})

router.get('/sobre', (req: Request,res:Response)=>{
    res.render('pages/sobre')
})

export default router;