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
export interface orderProps {
    item: { TransactionID: string, Goods: { item1: number, item2: string, item3: string, item4: string, item5: string, item6: string }, 
                Date: string, Status: string, GameName: string, GameID: string, Amount: string },
    index: number,
    showItem: (index: number) => void
}
export interface orderInfo {
    showInfo: boolean,
    info: { TransactionID: string, Goods: { item1: number, item2: string, item3: string, item4: string, item5: string, item6: string }, 
                Date: string, Status: string, GameName: string, GameID: string, Amount: string },
    closeInfo: () => void
}