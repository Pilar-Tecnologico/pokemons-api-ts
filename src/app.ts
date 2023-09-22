import 'dotenv/config'
import express from 'express'
import {router as pokemonsRouter} from './routes/pokemons.router'
import {router as digimonRouter} from './routes/digimons.router'
import {router as nasaRouter} from './routes/nasa.router'

import { logger } from './middlewares/logger.middleware'
import { errorHandler } from './middlewares/errorHandler'
import { connect } from './db/mongo'


const app = express()
const PORT = 3000

connect()

app.use(express.json())
app.use('*', logger)

app.use('/pokemons', pokemonsRouter)
app.use('/digimons', digimonRouter)
app.use('/nasa', nasaRouter)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log('Servidor express iniciado en', PORT)
})