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
    id: number,
    name: string,
    username: string
}