import { Router, Request, Response } from "express"

export const route1_func = (req: Request, res: Response) => {
    return res.json({ message: 'This is a route' })
}