import express from 'express';

const router = express.Router();

let anouncements = []

router.get('/', (req, res, next) => {
    res.status(200).json(anouncements);
})


router.post('/admin', (req, res, next) => {
    const data = {
        id : Date.now(),
        title : req.body.title,
        content : req.body.content
    }
    anouncements = [data, ...anouncements];
    res.status(201).json(anouncements);
});

router.put('/admin/:id', (req, res, next) => {
    const id = req.params.id;
    const title = req.body.title;
    const content = req.body.content;
    const anouncement = anouncements.find((one)=>one.id == id);
    if(anouncement){
        anouncement.title = title;
        anouncement.content = content;
        res.status(200).json(anouncements);
    } else {
        res.status(404);
    }
});

router.delete('/admin/:id', (req, res, next) => {
    const id = req.params.id;
    anouncements = anouncements.filter((t) => t.id != id);
    res.sendStatus(204);
})

export default router;