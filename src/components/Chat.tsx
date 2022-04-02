import { ChatItem, SendMessage } from ".";
import {MessageType, MessageFilterType} from "../redux/types/messages"

interface ContactProps{
    messages: MessageType[] 
    currentMessageText: string
    clickAddMessage: (id: number, messages: MessageType[], currentMessageText: string, filterId: number) => void
    onChangeMessageText: (text: string) => void
    userId: number 
    messageFilter: MessageFilterType
    onFetchRandomMessagePhrase: () => void
}

const Chat: React.FC<ContactProps> = ({ messages, currentMessageText, clickAddMessage, onChangeMessageText, userId, messageFilter, onFetchRandomMessagePhrase }) => {
    
    return (
        <div className="chat">
            <div className="chat__content">
                {messageFilter.id ? messageFilter.messages.map((el) => {
                    return <ChatItem name={el.name} lastName={el.lastName} img={el.img} messageText={el.messageText}
                        currentMessageTime={el.currentMessageTime} key={el.messageId} userId={el.userId} currentUserId={userId} />    
                })
                :
                messages.map((el) => {
                    return <ChatItem name={el.name} lastName={el.lastName} img={el.img} messageText={el.messageText}
                        currentMessageTime={el.currentMessageTime} key={el.messageId} userId={el.userId} currentUserId={userId} />
                })
                }
            </div>
            {messageFilter.id &&
                <SendMessage onChangeMessageText={onChangeMessageText} clickAddMessage={clickAddMessage} currentMessageText={currentMessageText}
                    id={userId} messages={messages} messageFilterId={messageFilter.id} onFetchRandomMessagePhrase={onFetchRandomMessagePhrase} />
            }
        </div>
    )
}

export default Chat;