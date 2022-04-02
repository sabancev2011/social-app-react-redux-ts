export interface PostRespType {
    id: number
    posts: PostType[]
}

export interface RandomPostPhraseRespType {
    id: string,
    text: string,
    source: string,
    source_url: string,
    language: string,
    permalink: string
}
export interface PostsStateType {
    posts: PostType[],
    currentPostText: string,
    currentPostImage: string
}

export interface PostType {
    postId: number,
    postText: string,
    postImage: string,
    currentPostTime: string
}

export enum PostActionTypes {
    SET_POSTS = "SET_POSTS",
    ADD_POST = "ADD_POST",
    ADD_POST_IMAGE = "ADD_POST_IMAGE",
    DELETE_POST = "DELETE_POST",
    CHANGE_POST_TEXT = "CHANGE_POST_TEXT",
    SET_RANDOM_POST_PHRASE = "SET_RANDOM_POST_PHRASE"
}

export interface SetPostsAction {
    type: PostActionTypes.SET_POSTS,
    payload: PostType[]
}
interface AddPostAction {
    type: PostActionTypes.ADD_POST,
    payload: PostType
}
export interface AddPostImageAction {
    type: PostActionTypes.ADD_POST_IMAGE,
    payload: string
}
interface DeletePostAction {
    type: PostActionTypes.DELETE_POST,
    payload: number
}
export interface ChangePostTextAction {
    type: PostActionTypes.CHANGE_POST_TEXT,
    payload: string
}
interface SetRandomPostPhraseAction {
    type: PostActionTypes.SET_RANDOM_POST_PHRASE,
    payload: string
}

export type PostsAction = SetPostsAction | AddPostAction | AddPostImageAction | DeletePostAction | ChangePostTextAction | SetRandomPostPhraseAction

