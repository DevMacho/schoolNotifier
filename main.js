import express from 'express';
import cors from 'cors';
import mainRoute from './router/main.js';
import http from 'http';

setInterval(()=>{
    console.log('every 10 minutes');
    http.get('https://schoolnotifier.herokuapp.com/');
}, 600000);

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', mainRoute);

app.use((req, res, next) => {
    res.sendStatus(404); // 경로를 찾을 수 없을 때 404 response를 보냄
})

app.use((error, req, res, next) => {
    console.error(error)
    res.sendStatus(500) // 에러가 발생했을 때 500 response를 보냄
})
app.listen(process.env.PORT || 8080); // 8080포트로 출력