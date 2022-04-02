
interface ChatItemProps {
    name: string
    lastName: string
    img: string
    messageText: string
    currentMessageTime: string
    userId: number
    currentUserId: number
}

const ChatItem: React.FC<ChatItemProps> = ({ name, lastName, img, messageText, currentMessageTime, userId, currentUserId }) => {
    return (
        <div className={currentUserId === userId ? "chatItem" : "chatItem right"}>
            <div className="chatItem__img">
                <img src={img} alt={`${name} ${lastName}`} />
            </div>
            <div className="chatItem__wrapper">
                <div className="chatItem__inner">
                    <p className="chatItem__name">{`${name} ${lastName}`}</p>
                    <span className="chatItem__messageTime">{currentMessageTime}</span>
                </div>
                <hr className="chatItem__hr" />
                <p className="chatItem__text">{messageText}</p>
            </div>
        </div>
    )
}

export default ChatItem;