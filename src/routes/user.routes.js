import express from 'express';
import userController from '../controllers/userController.js';
import authenticate from '../middlewares/authMiddleware.js';
import authorize from '../middlewares/roleMiddleware.js';

const router = express.Router();


router.post('/create', userController.createUser);


router.get('/', authenticate, authorize(['ADM', 'RH']), userController.getUsers);

export default router;
