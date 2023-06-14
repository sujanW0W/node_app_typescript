export interface UserCredentials{
    username : string,
    password: string
}

export interface RegisterUserCredentials{
    name: string,
    username: string,
    password: string,
    email: string,
    dob: Date
}

export interface UserResponse{
    userId: number,
    name: string,
    username: string
}

export const isUserResponse = (obj: any): obj is UserResponse => {
    return 'userId' in obj && 'name' in obj && 'username' in obj;
}