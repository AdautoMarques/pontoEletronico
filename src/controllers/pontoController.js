import { addPonto, getAllPontos, getPontosByUserId } from "../models/ponto.js";

const addPontoController = async (req, res) => {
  const userId = req.user?.id;
  const { tipo } = req.body;

  try {
    console.log('Adding ponto:', { userId, tipo }); // Log para depuração
    await addPonto(userId, tipo);
    res.status(201).send('Ponto registrado');
  } catch (error) {
    console.error('Error adding ponto:', error); // Log do erro
    res.status(500).json({ message: 'Erro ao registrar ponto' });
  }
};

const getUserPontosController = async (req, res) => {
  const userId = req.user?.id;

  try {
    const pontos = await getPontosByUserId(userId);
    res.json(pontos);
  } catch (error) {
    console.error('Error getting user pontos:', error); // Log do erro
    res.status(500).json({ message: 'Erro ao obter pontos do usuário' });
  }
};

const getAllPontosController = async (req, res) => {
  try {
    const pontos = await getAllPontos();
    res.json(pontos);
  } catch (error) {
    console.error('Error getting all pontos:', error); // Log do erro
    res.status(500).json({ message: 'Erro ao obter todos os pontos' });
  }
};

export default { addPonto: addPontoController, getUserPontos: getUserPontosController, getAllPontos: getAllPontosController };
