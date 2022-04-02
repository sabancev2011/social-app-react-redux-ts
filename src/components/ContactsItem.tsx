import { MessageFilterType } from "../redux/types/messages"

interface ContactsItemProps {
    id: number
    img: string
    name: string
    lastName: string
    clickSetMessageFilter: (id: number, currentUserId: number) => void
    messageFilter: MessageFilterType
    currentUserId: number
    lastMessageText?: string
    lastMessageTime?: string
}

const ContactsItem: React.FC<ContactsItemProps> = ({ id, img, name, lastName, clickSetMessageFilter, messageFilter, currentUserId, lastMessageText, lastMessageTime }) => {
    return (
        <div onClick={() => { clickSetMessageFilter(id, +currentUserId) }} className={messageFilter.id === id ? "contactsItem active" : "contactsItem"}>
            <div className="contactsItem__img">
                <img src={img} alt={name} />
            </div>
            <div className="contactsItem__inner">
                <h6 className="contactsItem__name">{`${name} ${lastName}`}</h6>
                <p className="contactsItem__lastMessage">{lastMessageText}</p>
            </div>
            <span className="contactItem__messageTime">{lastMessageTime}</span>
        </div>
    )
}

export default ContactsItem;