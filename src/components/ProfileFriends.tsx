import { ProfileFriendItem } from ".";
import { FriendType } from "../redux/types/friends";

interface ProfileFriendsProps {
    friends: FriendType[]
}

const ProfileFriends: React.FC<ProfileFriendsProps> = ({friends}) => {
    
    return (
        <div className="profileFriends">
            <h4 className="profileFriends__title">User friends</h4>
            <div className="profileFriends__wrapper">
                {friends.map((friend) => {
                    return <ProfileFriendItem img={friend.img} name={friend.name} key={friend.id} lastName={friend.lastName} id={friend.id}/>
                })}
            </div>
        </div>
    )
}

export default ProfileFriends