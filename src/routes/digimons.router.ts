import { Request, Response, Router } from "express";
import pokemonData from '../data/pokemon.json'
import { getDigimonsController } from "../controller/digimons/getDigimons.controller";
import { logger } from "../middlewares/logger.middleware";


export const router = Router();

//basepath---> /digimon

router.get('/', logger, getDigimonsController)
