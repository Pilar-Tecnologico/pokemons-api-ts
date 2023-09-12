import { Router } from "express";
import { getApodController } from "../controller/nasa/getApod.controller";

export const router = Router();

//basepath---> /nasa

router.get('/apod', getApodController)
