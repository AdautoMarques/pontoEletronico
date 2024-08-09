import express from 'express'
import bodyParser from 'body-parser'
import connectDB from './config.js'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import pontoRoutes from './routes/ponto.routes.js'


const app = express()
const PORT = 3333
connectDB()

app.use(bodyParser.json())

app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/pontos', pontoRoutes)




app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})



