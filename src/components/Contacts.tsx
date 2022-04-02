import { ContactsItem } from ".";
import { FriendType } from "../redux/types/friends";
import { MessageFilterType } from "../redux/types/messages"

interface ContactsProps {
    totalFriends: FriendType[]
    messageFilter: MessageFilterType
    clickSetMessageFilter: (id: number, currentUserId: number) => void
    currentUserId: number
}


const Contacts: React.FC<ContactsProps> = ({ totalFriends, messageFilter, clickSetMessageFilter, currentUserId }) => {
    return (
        <div className="contacts">
            <h4 className="contacts__title">Contacts</h4>
            {totalFriends.map((el) => {
                return <ContactsItem id={el.id} img={el.img} name={el.name}
                    lastName={el.lastName} key={el.id} clickSetMessageFilter={clickSetMessageFilter} messageFilter={messageFilter}
                    currentUserId={currentUserId} lastMessageText={el.lastMessageText} lastMessageTime={el.lastMessageTime} />
            })}
        </div>
    )
}

export default Contacts;



