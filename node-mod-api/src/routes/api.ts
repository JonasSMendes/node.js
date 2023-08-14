import { match } from "assert";
import { Router } from "express";
import { ping, random, name } from "../controllers/apicontroller";
import {createPhrase,listPhrases, getPhrase, updatePhrase, deletePhrase, randomPhrase } from '../controllers/phrasesApi'

const router = Router();

router.get('/ping', ping);
router.get('/random', random);
router.get('/nome/:nome', name);


router.get('/frase/aleatoria', randomPhrase)
router.post('/frases', createPhrase )
router.get('/frases', listPhrases)
router.get('/frase/:id', getPhrase)
router.put('/frase/:id', updatePhrase)
router.delete('/frase/:id', deletePhrase)




export default router