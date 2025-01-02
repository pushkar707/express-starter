import { app } from "./index"
import { PORT } from "./config";
import { connectDb } from "./db";


connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    })