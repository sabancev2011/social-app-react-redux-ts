import { FriendsStateType, FriendsActionTypes, FriendsAction } from "../types/friends"

let initialState: FriendsStateType = {
    friends: [],
    isLoadedFriends: false
}

let friends = (state = initialState, action: FriendsAction): FriendsStateType  => {
    switch (action.type) {
        case FriendsActionTypes.SET_FRIENDS:
            return {
                ...state,
                friends: action.payload,
                isLoadedFriends: true
            }
        case FriendsActionTypes.ADD_FRIEND:
            return {
                ...state,
                friends: [...state.friends, action.payload]
            }
        case FriendsActionTypes.DELETE_FRIEND:
            return {
                ...state,
                friends: state.friends.filter((el) => el.id !== action.payload)
            }
        default:
            return state
    }
}

export default friends