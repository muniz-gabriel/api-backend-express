import express from 'express'
import authRouter from './routers/authRouter.js'
import profileRouter from './routers/profileRouter.js'
import productRouter from './routers/productRouter.js'
import supplierRouter from './routers/supplierRouter.js'
import carRouter from './routers/carRouter.js'
import cors from 'cors'
import { logger } from './middlewares/logger.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { error404 } from './controllers/error404.js'

const app = express()
const port = 3000

app.use(logger)
app.use(cors()) // Habilita o CORS para todas as rotas e origens
app.use(express.json()) // Converte o JSON que chegou na requisição em um objeto JS
//  e vai salvar em request.body

app.use('/auth', authRouter)
app.use('/profile', profileRouter)
app.use('/product', productRouter)
app.use('/supplier', supplierRouter)
app.use('/car', carRouter)

app.use(error404)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`)
})