import { Link } from "react-router-dom";

interface ProfileFriendItemProps {
    id: number
    img: string
    name: string
    lastName: string
}

const ProfileFriendItem: React.FC<ProfileFriendItemProps> = ({ id, img, name, lastName }) => {
    return (
        <Link to={`/profile/${id}`} className="profileFriendItem"><img src={img} alt={name} />
            <p>{`${name} ${lastName}`}</p>
        </Link>
    )
}

export default ProfileFriendItem;