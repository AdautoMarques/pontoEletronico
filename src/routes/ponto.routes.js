import express from 'express';
import pontoController from '../controllers/pontoController.js';
import authenticate from '../middlewares/authMiddleware.js';
import authorize from '../middlewares/roleMiddleware.js';

const router = express.Router();

// Rota para criar ponto, exige autenticação e autorização
router.post('/create', authenticate, pontoController.addPonto);

// Rota para obter pontos do usuário, exige autenticação
router.get('/me', authenticate, pontoController.getUserPontos);

// Rota para obter todos os pontos, exige autenticação e autorização
router.get('/', authenticate, authorize(['ADM']), pontoController.getAllPontos);

export default router;
