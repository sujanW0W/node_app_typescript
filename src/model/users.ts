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
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        tableName: 'Users',
        timestamps: true
    }
)

sequelize.sync().then( () => console.log("Users table synced successfully."))

export default User