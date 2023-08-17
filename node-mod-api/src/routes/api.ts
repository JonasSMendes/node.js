import { match } from "assert";
import { Router } from "express";

import multer from "multer";

import { ping, random, name, uploadFile } from "../controllers/apicontroller";
import {createPhrase,listPhrases, getPhrase, updatePhrase, deletePhrase, randomPhrase } from '../controllers/phrasesApi'

const storageConfig = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './tmp');

    },
    filename: (req, file, cb) =>{
        let randomName = Math.floor(Math.random() * 99999999999)
        cb(null, `${randomName+Date.now()}.jpg`);
    }
})

const upload = multer({
    storage: storageConfig
})

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

router.post('/upload', upload.single('avatar') , uploadFile);




export default router