
interface UserInfoItemProps {
    infoTitle: string
    infoText: string
}

const UserInfoItem: React.FC<UserInfoItemProps> = ({ infoTitle, infoText }) => {
    return < div className="userInfo__item">
        <div className="userInfo__key">{`${infoTitle}:`}</div>
        <div className="userInfo__value">{infoText}</div>
    </div>
}

export default UserInfoItem