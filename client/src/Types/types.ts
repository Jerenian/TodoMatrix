

export interface ITODO {
    id:  number | null,
    text: string ,
    complited: boolean,
    type: string
}
export interface INEWUSER {
    username: string ,
    email: string ,
    password: string 
}
export interface IUSER{
    email: string,
    password: string
}