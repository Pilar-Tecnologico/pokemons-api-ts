import pokemonData from '../../data/pokemon.json'
import { Request, Response } from "express";


export async function getPokemonsController(req: Request, res: Response) {
    const type = req.query.type as string
    let pokemons = pokemonData
    if(type){
        pokemons = pokemonData.filter((pokemon) => pokemon.type.includes(type))
    }
    res.status(200).json(pokemons)
}