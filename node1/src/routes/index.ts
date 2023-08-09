import { Router } from "express";
import { home } from "../controllers/homeController";
import { contato, sobre } from "../controllers/infoControler";
import { name, AgeGET, AgePOST,addIdade,diminuirIdade,excluir,addUsuario,addUserAction,addAgeAction } from "../controllers/dadosController";



const router = Router()

router.get('/', home)

router.post('/novo-usuario', addUserAction);
router.get('/usuarios/:id/addidade', addAgeAction);

router.get('/contato', contato)
router.get('/sobre', sobre)

router.get('/nome', name)
router.get('/idade', AgeGET )
router.post('/idade-resultado', AgePOST )

router.post('/usuario/add', addUsuario)

router.get('/usuario/:id/mais', addIdade);
router.get('/usuario/:id/menos', diminuirIdade);
router.get('/usuario/:id/excluir', excluir);

export default router;