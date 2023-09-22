import { NextFunction, Request, Response } from "express";
import { getPokemonById } from '../../services/pokemon.service';

export async function getPokemonByIdController(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id
        const pokemon = await getPokemonById(id)
        if(!pokemon) {
            res.status(404).json({
                info: `Pokemon with ID ${id} not found`
            })
        }
        res.json(pokemon)
        } catch (error) {
            next(error)
        }
}