import { NextFunction, Request, Response } from "express";
import Joi, { ValidationError } from 'joi'

export function validatePokemonBody(req: Request, res: Response, next: NextFunction) {
    const {body} = req
    const schema = Joi.object({
        name: Joi.string().required(),
        type: Joi.array().items(
            Joi.string().valid(
                'Grass', 'Poison', 'Fire', 'Flying', 'Thunder'
                )
            ).required(),
        base_experience: Joi.number().required(),
        alias: Joi.string(),
        items: Joi.array().items(Joi.string())
    })

    const {error, value} = schema.validate(body)
    if(error) {
        return res.status(400).json({
            message: error.details[0].message
        })
    }

    next()



}