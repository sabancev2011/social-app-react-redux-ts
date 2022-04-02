import { UserActionTypes, UsersAction, UsersStateType } from "../types/users"

let initialState: UsersStateType = {
    users: [],
    isLoaded: false,
    currentUser: null,
    profile: null,
    userPage: 1,
    userPageCount: [],
    usersCount: null
}

let users = (state: UsersStateType = initialState, action: UsersAction): UsersStateType => {
    switch (action.type) {
        case UserActionTypes.SET_USERS:
            return {
                ...state,
                users: action.payload,
                isLoaded: true
            }
        case UserActionTypes.SET_USER:
            return {
                ...state,
                currentUser: { ...action.payload },
            }
        case UserActionTypes.SET_PROFILE:
            return {
                ...state,
                profile: { ...action.payload }
            }
        case UserActionTypes.SET_USER_PAGE:
            return {
                ...state,
                userPage: action.payload
            }
        case UserActionTypes.SET_USER_PAGE_COUNT:
            return {
                ...state,
                userPageCount: [...Array(Math.ceil(action.payload.count / action.payload.pageLimit))]
            }
        default:
            return state
    }
}
export default users;