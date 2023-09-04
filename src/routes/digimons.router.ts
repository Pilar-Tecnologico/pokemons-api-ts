import { Request, Response, Router } from "express";
import pokemonData from '../data/pokemon.json'
import { getDigimonsController } from "../controller/digimons/getDigimons.controller";


export const router = Router();

//basepath---> /digimon

router.get('/', getDigimonsController)
