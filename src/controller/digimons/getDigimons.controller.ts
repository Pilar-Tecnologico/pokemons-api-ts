import digimonData from '../../data/digimon.json'
import { Request, Response } from "express";


export async function getDigimonsController(req: Request, res: Response) {
    const type = req.query.type as string
    let digimons = digimonData
    if(type){
        digimons = digimonData.filter((digimon) => digimon.type.includes(type))
    }
    res.status(200).json(digimons)
}