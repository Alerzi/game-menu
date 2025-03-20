export interface auth {
    auto: boolean,
    menu: string,
    setAuto: (bool: boolean) => void,
    setMenu: (bool: string) => void,
    setUser: (userId: string) => void
}
export interface errorsProps {
    email: string,
    password: string,
}
export interface valid {
    email: string,
    password: string,
    passwordTwo: string,
    check: boolean
}
export interface login {
    email: string,
    password: string
}