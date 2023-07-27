import { Router, Request, Response } from "express";

const router = Router()

router.get('/', (rec: Request,res:Response)=>{
    res.send('home do painel')
})

router.get('/noticias', (rec: Request,res:Response)=>{
    res.send('choquei')
})


export default router;