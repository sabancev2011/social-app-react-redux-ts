export interface FriendType {
    id: number,
    img: string,
    name: string,
    lastName: string,
    country: string,
    city: string,
    email: string,
    jobTitle: string,
    dateOfBirth: string,
    password: string,
    lastMessageTime?: string,
    lastMessageText?: string
}

export interface FriendRespType {
    id: number
    friends: FriendType[]
}

export interface FriendsStateType {
    friends: FriendType[]
    isLoadedFriends: boolean
}

export enum FriendsActionTypes {
    SET_FRIENDS = "SET_FRIENDS",
    ADD_FRIEND = "ADD_FRIEND",
    DELETE_FRIEND = "DELETE_FRIEND"
}

interface SetFriendsAction {
    type: FriendsActionTypes.SET_FRIENDS
    payload: FriendType[] 
}

interface AddFriendAction {
    type: FriendsActionTypes.ADD_FRIEND
    payload: FriendType
}

interface DeleteFriendAction {
    type: FriendsActionTypes.DELETE_FRIEND
    payload: number 
}

export type FriendsAction = SetFriendsAction | AddFriendAction | DeleteFriendAction