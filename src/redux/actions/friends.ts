import axios from "axios";
import { FriendsAction, FriendsActionTypes, FriendRespType  } from "../types/friends";
import { FriendType } from "../types/friends";
import { Dispatch } from "redux";

export let fetchFriends = (userId: number) => {
    return async (dispatch: Dispatch<FriendsAction>) => {
        let { data } = await axios.get<FriendRespType>(`/friends/${userId}`);
        dispatch({ type: FriendsActionTypes.SET_FRIENDS, payload: data.friends })
    }
}
export let fetchDeleteFriend = (friends: FriendType[], currentUserId: number, userId: number) => {
    return async (dispatch: Dispatch<FriendsAction>) => {
        let { data } = await axios.put<FriendRespType>(`/friends/${currentUserId}`, { id: currentUserId, friends: friends.filter((el) => el.id !== userId) });
        await axios.put<FriendRespType>(`/friends/${userId}`, { id: userId, friends: data.friends.filter((el) => el.id !== currentUserId) });
        dispatch({ type: FriendsActionTypes.DELETE_FRIEND, payload: userId })
    }
}

export let fetchAddFriend = (friends: FriendType[], currentUser: FriendType, user: FriendType) => {
    return async (dispatch: Dispatch<FriendsAction>) => {
        await axios.put<FriendRespType>(`/friends/${currentUser.id}`, { id: currentUser.id, friends: [...friends, user] });
        let { data } = await axios.get<FriendRespType>(`/friends/${user.id}`)
        await axios.put<FriendRespType>(`/friends/${user.id}`, { id: user.id, friends: [...data.friends, currentUser] });
        dispatch({ type: FriendsActionTypes.ADD_FRIEND, payload: user })
    }
}




