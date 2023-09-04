import express from 'express'
import {router as pokemonsRouter} from './routes/pokemons.router'
import {router as digimonRouter} from './routes/digimons.router'

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/pokemons', pokemonsRouter)
app.use('/digimons', digimonRouter)

app.listen(PORT, () => {
    console.log('Servidor express iniciado en', PORT)
})