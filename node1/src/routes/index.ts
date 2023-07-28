import { Router } from "express";
import { home } from "../controllers/homeController";
import { contato, sobre } from "../controllers/infoControler";
import { name, AgeGET, AgePOST } from "../controllers/dadosController";

const router = Router()

router.get('/', home)

router.get('/contato', contato)
router.get('/sobre', sobre)

router.get('/nome', name)
router.get('/idade', AgeGET )
router.post('/idade-resultado', AgePOST )

export default router;