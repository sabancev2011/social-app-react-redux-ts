import { Link } from "react-router-dom";
import { UserType } from "../redux/types/users";
import { FriendType } from "../redux/types/friends";

interface UsersItemProps {
    currentUser: UserType | null
    clickAddFriend: (friends: FriendType[], currentUser: UserType, user: UserType) => void
    friends: FriendType[]
    clickDeleteFriend: (friends: FriendType[], currentUserId: number, userId: number) => void
    user: UserType
}

const UsersItem: React.FC<UsersItemProps> = ({ currentUser, clickAddFriend, friends, clickDeleteFriend, user }) => {

    return (
        <div className="usersItem">
            <Link to={`/profile/${user.id}`}>
                <img className="usersItem__img" src={user.img} alt={user.name} />
                <p className="usersItem__name">{`${user.name} ${user.lastName}`}</p>
            </Link>

            {friends.map(friend => friend.id).includes(user.id) ?
                <button onClick={() => currentUser && clickDeleteFriend(friends, currentUser.id, user.id)
                } className="usersItem__btn unfollow">unfollow</button>

                : <button onClick={() => currentUser && clickAddFriend(friends, currentUser, user)
                } className="usersItem__btn">follow</button>
            }
        </div>
    )
}

export default UsersItem;

