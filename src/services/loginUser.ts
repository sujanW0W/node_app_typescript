import User from "../model/users";
import generateToken from "../utils/jwt";
import { compareHash } from "../utils/hashPassword";
import { UserCredentials, UserResponse } from "../utils/userRequest";

export const login = async (userInput: UserCredentials): Promise<string> => {
    const {username, password} = userInput

    if(!username || !password)
        throw new Error("Invalid User Credentials.")

    const response = await User.findOne({where: {username}})

    if(!response)
        throw new Error("User Not Found")

    const user = JSON.parse(JSON.stringify(response))

    const isMatch = await compareHash(password, user.password)

    if(!isMatch)
        throw new Error("Password not match")

    const userInfo: UserResponse = {
        id: user.id,
        name: user.name,
        username: user.username
    }

    const token = generateToken(userInfo)

    return token
}