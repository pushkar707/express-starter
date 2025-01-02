import express, { Request, Response, Application } from "express"
import { router } from "./routes/Router1"

export const app: Application = express()
app.use(express.json())



app.get('/', (req: Request, res: Response) => {
    return res.send('API healthy')
})

app.use('/route', router)