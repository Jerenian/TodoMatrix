import { SetStateAction } from "react"

export interface TODO {
    id: string | number,
    description: string
}
export interface INEWUSER {
    username: string | SetStateAction<string>,
    email: string | SetStateAction<string>,
    password: string | SetStateAction<string>
}
export interface IUSER{
    email: string,
    password: string
}