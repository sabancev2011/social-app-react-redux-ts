
import { messages, users, friends, posts } from "./"
import { combineReducers } from "redux";

export const rootReducer = combineReducers({ messages, users, friends, posts })

export { default as messages } from "./messages";
export { default as users } from "./users";
export { default as friends } from "./friends";
export { default as posts } from "./posts";

export type RootState = ReturnType<typeof rootReducer>