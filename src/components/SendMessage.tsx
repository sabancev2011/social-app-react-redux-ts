import { MessageType } from "../redux/types/messages"

interface SendMessageProps {
    messages: MessageType[]
    currentMessageText: string
    clickAddMessage: (id: number, messages: MessageType[], currentMessageText: string, filterId: number) => void
    onChangeMessageText: (text: string) => void
    id: number
    messageFilterId: number
    onFetchRandomMessagePhrase: () => void
}

const SendMessage: React.FC<SendMessageProps> = ({ onChangeMessageText, clickAddMessage, currentMessageText, id, messages, messageFilterId, onFetchRandomMessagePhrase }) => {
    return (
        <div className="sendMessage">
            <div className="sendMessage__wrapper">
                <input placeholder="Type your message" type="text" value={currentMessageText} onChange={(e) => onChangeMessageText(e.target.value)} />
                {currentMessageText ?
                    <button onClick={() => clickAddMessage(id, messages, currentMessageText, messageFilterId)} className="sendMessage__sendBtn">send</button>
                    :
                    <button className="sendMessage__sendBtn">send</button>
                }
                <button onClick={() => onFetchRandomMessagePhrase()} className="randomPhraseBtn">random phrase</button>
            </div>
        </div>
    )
}

export default SendMessage;