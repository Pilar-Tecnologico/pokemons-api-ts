import { NextFunction, Request, Response } from "express";
import { IPokemon } from "../../interfaces/IPokemon";
import { createPokemon } from "../../services/pokemon.service";

export async function createPokemonController(req: Request, res: Response, next: NextFunction) {
    try {
    const {name, type, base_experience, items, alias} = req.body
    const pokemonData: IPokemon = { name, type, base_experience, items, alias }
    const response = await createPokemon(pokemonData)

    res.status(200).json(response)


    } catch (error) {
        next(error)
    }
}