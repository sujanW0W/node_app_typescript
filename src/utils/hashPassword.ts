import * as bcrypt from 'bcryptjs'

export const generateHash = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    return hashedPassword
}

export const compareHash = async (password: string, hashedPassword: string): Promise<Boolean> => {
    const isMatch = await bcrypt.compare(password, hashedPassword)

    return isMatch
}