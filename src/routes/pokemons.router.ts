import { Router } from "express";
import { getPokemonsController } from "../controller/pokemons/getPokemons.controller";
import { getPokemonByIdController } from "../controller/pokemons/getPokemonsById.controller";
import { createPokemonController } from "../controller/pokemons/createPokemon.controller";
import { validatePokemonBody } from "../middlewares/validationMiddleware";


export const router = Router();

//basepath---> /pokemons

router.get('/', getPokemonsController)
router.get('/:id', getPokemonByIdController)
router.post('/', validatePokemonBody,createPokemonController)