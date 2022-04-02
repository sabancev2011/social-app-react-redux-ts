export interface UserType {
    id: number,
    img: string,
    name: string,
    lastName: string,
    country: string,
    city: string,
    email: string,
    jobTitle: string,
    dateOfBirth: string,
    password: string
}

export interface UsersStateType{
    users: UserType[],
    isLoaded: boolean,
    currentUser: UserType | null,
    profile: UserType | null,
    userPage: number,
    userPageCount: number[],
    usersCount: number | null
}

export enum UserActionTypes {
    SET_USERS = "SET_USERS",
    SET_USER = "SET_USER",
    SET_PROFILE = "SET_PROFILE",
    SET_USER_PAGE = "SET_USER_PAGE",
    SET_USER_PAGE_COUNT = "SET_USER_PAGE_COUNT"
}


interface SetUsersActon { 
    type: UserActionTypes.SET_USERS, 
    payload: UserType[] 
}
interface SetUserAction { 
    type: UserActionTypes.SET_USER, 
    payload: UserType 
}
interface SetProfileAction { 
    type: UserActionTypes.SET_PROFILE, 
    payload: UserType
}
interface SetUserPageAction { 
    type: UserActionTypes.SET_USER_PAGE, 
    payload: number
}
interface SetUserPageCountAction { 
    type: UserActionTypes.SET_USER_PAGE_COUNT, 
    payload: { count: number, pageLimit: number } 
}

export type UsersAction = SetUsersActon | SetUserAction | SetProfileAction | SetUserPageAction | SetUserPageCountAction  