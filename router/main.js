import express from 'express';

const router = express.Router();

let anouncements = [
    {
        id: 1,
        title: "오늘 급식 로제떡볶이",
        content: "개맛있겠다"
    },
    {
        id: 2,
        title: "국어 수행평가 안내",
        content: "받아쓰기: 샍으팁이굳옥과조아요눌어줏애요"
    }
]

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