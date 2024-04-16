import { SetStateAction } from "react"

export interface TODO {
    id: string | number,
    description: string
}
export interface IUSER {
    username: string | SetStateAction<string>,
    email: string | SetStateAction<string>,
    password: string | SetStateAction<string>
}
