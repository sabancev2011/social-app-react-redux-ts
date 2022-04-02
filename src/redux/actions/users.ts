import axios from "axios"
import { Dispatch } from "redux";
import { UserType, UserActionTypes, UsersAction } from "../types/users"
import { MessageRespType } from "../types/messages"
import { PostRespType } from "../types/posts"
import { FriendRespType } from "../types/friends"


export let setUsers = (users: UserType[]) => ({ type: UserActionTypes.SET_USERS, payload: users });
export let setUser = (user: UserType) => ({ type: UserActionTypes.SET_USER, payload: user });
export let setProfile = (profile: UserType) => ({ type: UserActionTypes.SET_PROFILE, payload: profile });
export let setUserPage = (page: number) => ({ type: UserActionTypes.SET_USER_PAGE, payload: page });
export let setUserPageCount = (count: number, pageLimit: number) => ({ type: UserActionTypes.SET_USER_PAGE_COUNT, payload: { count, pageLimit } });

export let fetchUser = (userId: number) => {
    return async (dispatch: Dispatch<UsersAction>) => {
        let { data } = await axios.get<UserType>(`/users/${userId}`);
        dispatch({ type: UserActionTypes.SET_PROFILE, payload: data })
    }
}

export let fetchUsersPagin = (page: number, pageLimit: number) => {
    return async (dispatch: Dispatch<UsersAction>) => {
        let { data, headers } = await axios.get<UserType[]>(`/users?_page=${page}&_limit=${pageLimit}`);
        dispatch({ type: UserActionTypes.SET_USERS, payload: data });
        dispatch({ type: UserActionTypes.SET_USER_PAGE_COUNT, payload: { count: +headers["x-total-count"], pageLimit: pageLimit } })
    }
}

export let fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        let { data } = await axios.get<UserType[]>(`/users`);
        dispatch({ type: UserActionTypes.SET_USERS, payload: data });
    }
}

export let fetchCreateUser = (user: UserType) => {
    return async (dispatch: Dispatch<UsersAction>) => {
        let { data } = await axios.get<UserType[]>(`/users`);
        let addedUser = { ...user, id: data.length + 1 }
        await axios.post<UserType>(`/users`, { ...addedUser });
        await axios.post<MessageRespType>(`/messages`, { id: addedUser.id, messages: [] })
        await axios.post<PostRespType>(`/posts`, { id: addedUser.id, posts: [] })
        await axios.post<FriendRespType>(`/friends`, { id: addedUser.id, friends: [] })
        dispatch({ type: UserActionTypes.SET_USER, payload: addedUser });
        dispatch({ type: UserActionTypes.SET_PROFILE, payload: addedUser });
    }
}







