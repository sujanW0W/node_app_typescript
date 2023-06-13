import {RegisterUserCredentials, UserResponse} from '../utils/userRequest'
import User from '../model/users'
import { generateHash } from '../utils/hashPassword'
import generateToken from '../utils/jwt'

export const createUser = async (userInput: RegisterUserCredentials): Promise<string> => {
    const {name, username, password, email, dob} = userInput

    if(!name || !username || !password || !email || !dob)
        throw new Error("Invalid User Credentials..")

    const hashedPassword = await generateHash(password)
    
    const response = await User.create({
        name,
        username,
        password: hashedPassword,
        email,
        dob
    })

    const user = JSON.parse(JSON.stringify(response))
    
    const userInfo: UserResponse = {
        id: user.id,
        name: user.name,
        username: user.username, 
    }
    const token = generateToken(userInfo)

    return token;
}