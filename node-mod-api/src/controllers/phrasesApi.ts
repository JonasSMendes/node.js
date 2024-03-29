import { Request, Response } from "express";
import { Sequelize } from 'sequelize'
import { Phrase } from "../models/Phrase";

export const createPhrase = async (req: Request, res: Response) =>{

    let {author, txt} = req.body

    let newPhrase =  await Phrase.create({author, txt});

    res.status(201);
    res.json({id: newPhrase.id, author, txt});
}

export const listPhrases = async (req: Request, res: Response) =>{
    let list = await Phrase.findAll()
    res.json({list})
}

export const getPhrase = async (req: Request, res: Response) =>{
    let {id} = req.params;

    let phrase = await Phrase.findByPk(id);
    if(phrase){
        res.json({phrase})
    }else{
        res.json({error: 'deu algo de errado'})
    }
};


export const updatePhrase = async (req: Request, res: Response) =>{
    let {id} = req.params;
    let {author, txt} = req.body;

    let phrase = await Phrase.findByPk(id);
    if(phrase){
        phrase.author = author;
        phrase.txt = txt;
        await phrase.save();

        res.json({phrase});
    }else{
        res.json({error:'Frase não encontrada'})
    }
}

export const deletePhrase = async (req: Request, res: Response) =>{
    let {id} = req.params

    await Phrase.destroy({
        where:{
            id: id
        }
    })

    res.json({})
}

export const randomPhrase = async (req: Request, res: Response) => {
    
    try {
        let phrase = await Phrase.findOne({
            order: [
                Sequelize.fn('RANDOM')
            ]
        });

        if (phrase) {
            res.json({ phrase });
        } else {
            res.status(404).json({ error: 'Não há frases encontradas' });
        }
    } catch (error) {
        console.error('Erro ao buscar frase aleatória:', error);
        res.status(500).json({ error: 'Ocorreu um erro ao buscar a frase aleatória' });
    }
};