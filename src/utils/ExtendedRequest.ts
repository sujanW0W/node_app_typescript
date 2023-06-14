import { Request } from "express";
import { UserResponse } from "./userRequest";

export interface ExtendedRequest extends Request{
    user?: UserResponse
}