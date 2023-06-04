import {Request, Response} from 'express'
import User from '../model/users'

const getAllUsers =async (req: Request, res: Response): Promise<void> => {
    const users = await User.findAll();
    if(users.length === 0){
        res.status(404).json({msg: "No users found."})
        return;
    }

    res.status(400).json(users)
}

const loginUser = (req: Request, res: Response): void => {
    res.status(200).json({msg: "Login User"})
}

const registerUser = (req: Request, res: Response): void => {
    res.status(200).json({msg: "Resgister User."})
}

export {getAllUsers, loginUser, registerUser}