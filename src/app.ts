import express from 'express'
import {router as pokemonsRouter} from './routes/pokemons.router'
import {router as digimonRouter} from './routes/digimons.router'
import { logger } from './middlewares/logger.middleware'
import { errorHandler } from './middlewares/errorHandler'

const app = express()
const PORT = 3000

app.use(express.json())
app.use('*', logger)

app.use('/pokemons', pokemonsRouter)
app.use('/digimons', digimonRouter)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log('Servidor express iniciado en', PORT)
})