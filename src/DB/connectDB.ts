import {Sequelize} from 'sequelize'

const sequelize = new Sequelize(
    "notes_virtuosway",
    "root",
    "hello_world",
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

const connectDB = async (): Promise<void> => {
    try{
        await sequelize.authenticate();
        console.log('Connected to DB....');
        
    }catch(err){
        console.log("error....")
    }
}

export {sequelize, connectDB}
