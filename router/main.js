import express from 'express';
import * as controller from '../controller/main.js';

const router = express.Router();


router.get('/', controller.get);

router.post('/admin', controller.post);

router.put('/admin/:id', controller.put);

router.delete('/admin/:id', controller.remove)

export default router;