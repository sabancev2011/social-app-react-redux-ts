export interface MessageType {
    messageId: number,
    userId: number,
    sendTo: number,
    name: string,
    lastName: string,
    img: string,
    messageText: string,
    currentMessageTime: string
}

export interface MessageFilterType {
    id: number | null,
    messages: MessageType[],
}

export interface LastFriendsMessageType {
    id: number,
    lastMessageTime: string,
    lastMessageText: string
}

export interface MessagesStateType {
    messages: MessageType[],
    messageFilter: MessageFilterType,
    currentMessageText: string,
    lastFriendsMessages: LastFriendsMessageType[],
}

export interface MessageRespType {
    id: number
    messages: MessageType[]
}

export interface RandomMessagePhraseType {
    id: string,
    text: string,
    source: string,
    source_url: string,
    language: string,
    permalink: string
}

export enum MessageActionTypes {
    SET_MESSAGES = "SET_MESSAGES",
    ADD_MESSAGE = "ADD_MESSAGE",
    CHANGE_MESSAGE_TEXT = "CHANGE_MESSAGE_TEXT",
    SET_MESSAGE_FILTER = "SET_FILTER",
    SET_LAST_FRIENDS_MESSAGES = "SET_LAST_FRIENDS_MESSAGES",
    SET_RANDOM_MESSAGE_PHRASE = "SET_RANDOM_MESSAGE_PHRASE"
}

interface setMessagesAction {
    type: MessageActionTypes.SET_MESSAGES,
    payload: MessageType[]
}

interface addMessageAction {
    type: MessageActionTypes.ADD_MESSAGE,
    payload: MessageType
}

interface changeMessageTextAction {
    type: MessageActionTypes.CHANGE_MESSAGE_TEXT,
    payload: string
}

interface setMessageFilterAction {
    type: MessageActionTypes.SET_MESSAGE_FILTER,
    payload: MessageFilterType
}

interface setLastFriendsMessagesAction {
    type: MessageActionTypes.SET_LAST_FRIENDS_MESSAGES,
    payload: MessageType[]
}

interface setRandomMessagePhraseAction {
    type: MessageActionTypes.SET_RANDOM_MESSAGE_PHRASE,
    payload: string
}

export type MessagesAction = setMessagesAction | addMessageAction | changeMessageTextAction | setMessageFilterAction
    | setLastFriendsMessagesAction | setRandomMessagePhraseAction 