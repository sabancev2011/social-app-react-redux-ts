import axios from "axios";
import { Dispatch } from "redux";
import { PostActionTypes, PostType, PostsAction, PostRespType, RandomPostPhraseRespType } from "../types/posts"


export let changePostText = (text: string) => ({ type: "CHANGE_POST_TEXT", payload: text });
export let addPostImage = (image: string) => ({ type: "ADD_POST_IMAGE", payload: image });

export let fetchPosts = (userId: number) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        let { data } = await axios.get<PostRespType>(`/posts/${userId}`)
        dispatch({ type: PostActionTypes.SET_POSTS, payload: data.posts });
    }
}

export let fetchAddPost = (userId: number, posts: PostType[], currentPostText: string, currentPostImage: string) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        await axios.put<PostRespType>(`/posts/${userId}`, {
            id: userId,
            posts: [...posts, {
                postId: posts.length + 1,
                postText: currentPostText,
                postImage: currentPostImage,
                currentPostTime: new Date().toString().substr(4, 21)
            }]
        });

        dispatch({
            type: PostActionTypes.ADD_POST, payload: {
                postId: posts.length + 1,
                postText: currentPostText,
                postImage: currentPostImage,
                currentPostTime: new Date().toString().substr(4, 21)
            }
        })
    };
}

export let fetchDeletePost = (userId: number, postId: number, posts: PostType[]) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        await axios.put<PostRespType>(`/posts/${userId}`, {
            id: userId,
            posts: posts.filter((post) => post.postId !== postId)
        });
        dispatch({ type: PostActionTypes.DELETE_POST, payload: postId })
    }
}

export let fetchRandomPostPhrase = () => {
    return async (dispatch: Dispatch<PostsAction>) => {
        let { data: { text } } = await axios.get<RandomPostPhraseRespType>(`https://uselessfacts.jsph.pl/random.json?language=en`);
        dispatch({ type: PostActionTypes.SET_RANDOM_POST_PHRASE, payload: text })
    }
}