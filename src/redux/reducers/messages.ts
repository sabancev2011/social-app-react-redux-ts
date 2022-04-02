import { MessagesStateType, MessagesAction, MessageActionTypes, LastFriendsMessageType } from "../types/messages";

let initialState: MessagesStateType = {
    messages: [],
    messageFilter: {
        id: null,
        messages: [],
    },
    currentMessageText: "",
    lastFriendsMessages: []
}


let messages = (state = initialState, action: MessagesAction) => {

    switch (action.type) {
        case MessageActionTypes.SET_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }
        case MessageActionTypes.CHANGE_MESSAGE_TEXT:
            return {
                ...state,
                currentMessageText: action.payload,
            }
        case MessageActionTypes.ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
                messageFilter: {
                    ...state.messageFilter,
                    messages: [...state.messageFilter.messages, action.payload]
                },
                currentMessageText: "",
            }
        case MessageActionTypes.SET_MESSAGE_FILTER:
            return {
                ...state,
                messageFilter: {
                    id: action.payload.id,
                    messages: action.payload.messages
                }
            }
        case MessageActionTypes.SET_LAST_FRIENDS_MESSAGES:
            return {
                ...state,
                lastFriendsMessages: action.payload.reduce((sum:LastFriendsMessageType[], el) => {
                    sum = sum.filter(e => e.id !== el.userId);
                    return [...sum, { id: el.userId, lastMessageTime: el.currentMessageTime, lastMessageText: el.messageText }]
                }, [])
            }
            case MessageActionTypes.SET_RANDOM_MESSAGE_PHRASE:
            return {
                ...state,
                currentMessageText: action.payload
            }
        default:
            return state
    }
}

export default messages