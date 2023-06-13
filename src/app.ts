// import 'dotenv/config'
// import 'express-async-errors'
// import cors from 'cors'

// import express, {Application, Request, Response} from 'express'
// const app: Application = express()

// app.use(cors())
// app.use(express.json())

// import {connectDB} from './DB/connectDB'

// //Routers
// import {router as usersRouter} from './routes/users'


// app.use('/users', usersRouter)


// const PORT = process.env.PORT || 5000;

// const start = async () => {
//     await connectDB();
    
//     app.listen(PORT, () => {
//         console.log(`Server is listening on PORT ${PORT}......`)
//     })
// }

// start()

import 'dotenv/config'
// import 'express-async-errors'
import cors from 'cors'

import express, {Application, Request, Response} from 'express'

//Routers
import {router as usersRoute} from './routes/users'

class App{
    public app: Application;
    constructor(){
        this.app = express();
        this.config()
        
        this.app.use('/api/v1/users', usersRoute)
    }

    private config(): void{
        this.app.use(cors())
        this.app.use(express.json())
    }
}

export default App;