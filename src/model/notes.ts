import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../DB/connectDB";
import User from "./users";

const Note = sequelize.define(
    "Note", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        }
    },
    {
        tableName: 'Notes',
        timestamps: true,
    }
)

sequelize.sync().then( () => console.log("Notes table synced successfully."))

export default Note