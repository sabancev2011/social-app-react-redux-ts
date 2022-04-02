import { Contacts, Chat } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../redux/reducers"
import { fetchMessages, fetchAddMessage, fetchMessageFilter, fetchRandomMessagePhrase, changeMessageText } from "../redux/actions/messages";
import { MessageType } from "../redux/types/messages"
import { fetchFriends } from "../redux/actions/friends";
import { useParams } from "react-router-dom";
import { FriendType } from "../redux/types/friends";

const Messages: React.FC = () => {
    let { userId } = useParams<{ userId: string }>();
    let dispatch = useDispatch();
    let { messages, currentMessageText, messageFilter, lastFriendsMessages } = useSelector(({ messages }: RootState) => messages);
    let { friends } = useSelector(({ friends }: RootState) => friends);
    let clickAddMessage = (id: number, messages: MessageType[], currentMessageText: string, filterId: number) => dispatch(fetchAddMessage(id, messages, currentMessageText, filterId));
    let onChangeMessageText = (text: string) => dispatch(changeMessageText(text));
    let clickSetMessageFilter = (id: number, currentUserId: number) => dispatch(fetchMessageFilter(id, currentUserId));
    let totalFriends = () => friends.reduce((sum: FriendType[], el) => {
        let addEl = lastFriendsMessages.filter(e => e.id === el.id)
        return [...sum, { ...el, ...addEl[0] }]
    }, []);
    let onFetchRandomMessagePhrase = () => dispatch(fetchRandomMessagePhrase())

    useEffect(() => {
        dispatch(fetchFriends(+userId));
        dispatch(fetchMessages(+userId));
    }, [dispatch, userId])

    return (
        <section className="messages">
            <Contacts totalFriends={totalFriends()} clickSetMessageFilter={clickSetMessageFilter} messageFilter={messageFilter} currentUserId={+userId} />
            <Chat messages={messages} currentMessageText={currentMessageText} clickAddMessage={clickAddMessage}
                onChangeMessageText={onChangeMessageText} userId={+userId} messageFilter={messageFilter} onFetchRandomMessagePhrase={onFetchRandomMessagePhrase} />
        </section>
    )
}

export default Messages;