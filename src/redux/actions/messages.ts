import axios from "axios"
import { Dispatch } from "redux";
import { MessageActionTypes, MessagesAction, MessageType, MessageRespType, RandomMessagePhraseType } from "../types/messages";
import { UserType } from "../types/users"


export let changeMessageText = (text: string) => ({ type: MessageActionTypes.CHANGE_MESSAGE_TEXT, payload: text })

export let fetchMessages = (userId: number) => {
    return async (dispatch: Dispatch<MessagesAction>) => {
        let { data: { messages } } = await axios.get<MessageRespType>(`/messages/${userId}`);
        let friendsMessages = () => messages.filter(el => el.userId !== userId)
        dispatch({ type: MessageActionTypes.SET_LAST_FRIENDS_MESSAGES, payload: friendsMessages() });
        dispatch({ type: MessageActionTypes.SET_MESSAGES, payload: messages });
    }
}
export let fetchAddMessage = (id: number, messages: MessageType[], currentMessageText: string, filterId: number) => {
    return async (dispatch: Dispatch<MessagesAction>) => {
        let currentUserData = await axios.get<UserType>(`/users/${id}`)
        await axios.put<MessageRespType>(`/messages/${id}`, {
            id: id,
            messages: [...messages, {
                messageId: messages.length + 1,
                userId: id,
                sendTo: filterId,
                name: currentUserData.data.name,
                lastName: currentUserData.data.lastName,
                img: currentUserData.data.img,
                messageText: currentMessageText,
                currentMessageTime: new Date().toString().substr(4, 21)
            }]
        })
        let userData = await axios.get<MessageRespType>(`/messages/${filterId}`)
        await axios.put<MessageRespType>(`/messages/${filterId}`, {
            id: filterId,
            messages: [...userData.data.messages, {
                messageId: userData.data.messages.length + 1,
                userId: id,
                name: currentUserData.data.name,
                lastName: currentUserData.data.lastName,
                img: currentUserData.data.img,
                messageText: currentMessageText,
                currentMessageTime: new Date().toString().substr(4, 21)
            }]
        })
        dispatch({
            type: MessageActionTypes.ADD_MESSAGE,
            payload: {
                messageId: messages.length + 1,
                userId: id,
                sendTo: filterId,
                name: currentUserData.data.name,
                lastName: currentUserData.data.lastName,
                img: currentUserData.data.img,
                messageText: currentMessageText,
                currentMessageTime: new Date().toString().substr(4, 21)
            }
        })
    }
}

export let fetchMessageFilter = (id: number, currentUserId: number) => {
    return async (dispatch: Dispatch<MessagesAction>) => {
        let { data: { messages } } = await axios.get<MessageRespType>(`/messages/${currentUserId}`);
        let messageFilter = () => [...messages].filter((el) => +el.userId === id || +el.sendTo === id);
        dispatch({
            type: MessageActionTypes.SET_MESSAGE_FILTER,
            payload: {
                id: id,
                messages: messageFilter()
            }
        })
    }
}

export let fetchRandomMessagePhrase = () => {
    return async (dispatch: Dispatch<MessagesAction>) => {
        let { data: { text } } = await axios.get<RandomMessagePhraseType>(`https://uselessfacts.jsph.pl/random.json?language=en`);
        dispatch({ type: MessageActionTypes.SET_RANDOM_MESSAGE_PHRASE, payload: text })
    }
}