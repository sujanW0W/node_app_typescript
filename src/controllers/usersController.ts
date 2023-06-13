import {Request, Response} from 'express'
import User from '../model/users'
import { createUser } from '../services/createUser';
import { login } from '../services/loginUser';
import { RegisterUserCredentials, UserCredentials } from '../utils/userRequest';

const getAllUsers =async (req: Request, res: Response): Promise<void> => {
    const users = await User.findAll();
    if(users.length === 0){
        res.status(404).json({msg: "No users found."})
        return;
    }

    res.status(400).json(users)
}

const loginUser = async (req: Request, res: Response): Promise<void> => {
    const {username, password} = req.body;
    const userInput: UserCredentials = {
        username,
        password
    }

    try {
        const response = await login(userInput)

        res.status(200).json({msg: "user login successfull.", token: response})
    } catch (error) {
        console.log({err: error})
        res.status(400).json({error: "Error", err: error})
    }
}

const registerUser = async (req: Request, res: Response): Promise<void> => {
    const {name, username, password, email, dob} = req.body;
    const userInput: RegisterUserCredentials = {
        name, 
        username,
        password,
        email,
        dob
    }

    try {
        const response = await createUser(userInput)
    
        res.status(201).json({msg: `User has been created successfully.`, token: response})
    } catch (error) {
        console.log({err: error})
        res.status(400).json({error: "Error", err: error})
    }
    
}

export {getAllUsers, loginUser, registerUser}