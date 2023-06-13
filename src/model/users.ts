import {Sequelize, DataTypes} from 'sequelize'
import {sequelize} from '../DB/connectDB'

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true

        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        tableName: 'Users',
        timestamps: true
    }
)

sequelize.sync().then( () => console.log("Users table synced successfully."))

export default User