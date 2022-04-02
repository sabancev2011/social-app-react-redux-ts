import { PostsAction, PostsStateType, PostActionTypes } from "../types/posts"

let initialState: PostsStateType = {
    posts: [],
    currentPostText: "",
    currentPostImage: ""
}

let posts = (state = initialState, action: PostsAction) => {
    switch (action.type) {
        case PostActionTypes.SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case PostActionTypes.ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
                currentPostText: "",
                currentPostImage: ""
            }
        case PostActionTypes.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.postId !== action.payload)
            }
        case PostActionTypes.CHANGE_POST_TEXT:
            return {
                ...state,
                currentPostText: action.payload
            }
        case PostActionTypes.ADD_POST_IMAGE:
            return {
                ...state,
                currentPostImage: action.payload
            }
            case PostActionTypes.SET_RANDOM_POST_PHRASE:
                return {
                    ...state,
                    currentPostText: action.payload
                }
        default:
            return state
    }
}

export default posts