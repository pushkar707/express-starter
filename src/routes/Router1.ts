import { Router } from "express"
import { route1_func } from "../controllers/Controllor1"

export const router = Router()

router.get('/', route1_func)