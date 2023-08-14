import { match } from "assert";
import { Router } from "express";
import { ping, random, name } from "../controllers/apicontroller";
import {createPhrase} from '../controllers/phrasesApi'

const router = Router();

router.get('/ping', ping);
router.get('/random', random);
router.get('/nome/:nome', name);

router.post('/frases', createPhrase )


export default router