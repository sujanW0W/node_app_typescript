import App from './app'

//DB
import {connectDB} from './DB/connectDB'

const PORT = process.env.PORT || 5000;

const app: App = new App();

const start = async () => {
    await connectDB();

    app.app.listen(PORT, () => {
        console.log("Server is running.")
    })
}

start()