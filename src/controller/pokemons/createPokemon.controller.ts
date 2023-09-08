import { NextFunction, Request, Response } from "express";

export async function createPokemonController(req: Request, res: Response, next: NextFunction) {
    try {
        throw new Error('InternalServerError')

    } catch (error) {
        next(error)
    }
    // res.status(200).json({
    //     status: 'OK'
    // })
}