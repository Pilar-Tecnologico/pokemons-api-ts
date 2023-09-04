import { Router } from "express";
import { getPokemonsController } from "../controller/pokemons/getPokemons.controller";
import { getPokemonByNameController } from "../controller/pokemons/getPokemonsByName.controller";
import { createPokemonController } from "../controller/pokemons/createPokemon.controller";


export const router = Router();

//basepath---> /pokemons

router.get('/', getPokemonsController)
router.get('/:name', getPokemonByNameController)
router.post('/', createPokemonController)