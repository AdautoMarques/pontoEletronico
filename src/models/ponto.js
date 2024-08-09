import mongoose from "mongoose";

const pontoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tipo: {
    type: String,
    enum: ['ENTRADA', 'ALMOCO', 'VOLTA ALMOCO', 'SAIDA'], 
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
})

const Ponto = mongoose.model('Ponto', pontoSchema)

export const addPonto = async (userId, tipo) => {
  const ponto = new Ponto({userId, tipo})
  await ponto.save()
}

export const getPontosByUserId = async (userId) => {
  return Ponto.find({userId})
}

export const getAllPontos = async () => {
  return Ponto.find().populate('userId')
}