import * as data from '../data/main.js';

export async function get(){
    (req, res, next) => {
        const d = data.getAll();
        res.status(200).json(d);
    }
}

export async function post(){
    (req, res, next) => {
        const d = data.postAnc(req.body.title, req.body.content)
        res.status(201).json(d);
    }
}

export async function put(){
    (req, res, next) => {
        const id = req.params.id;
        const title = req.body.title;
        const content = req.body.content;
        const d = data.putAnc(id, title, content);
        res.status(200).json(d);
    }
}

export async function remove(){
    (req, res, next) => {
        const id = req.params.id;
     data.removeAnc(id);
        res.sendStatus(204);
    }
}