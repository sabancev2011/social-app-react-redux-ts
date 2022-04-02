import { UserInfoItem } from ".";

interface UserInfoProps {
    info: {
        [index: string]: string
        country: string
        city: string
        email: string
        jobTitle: string
        dateOfBirth: string
    }
}

const UserInfo: React.FC<UserInfoProps> = ({ info }) => {
    return (
        <div className="userInfo">
            <div className="userInfo__Wrapper">
                <h4 className="userInfo__title">User information</h4>
                {info && Object.keys(info).map((el, index) => {
                    return <UserInfoItem key={`${el}_${index}`} infoTitle={el} infoText={info[el]} />
                })}
            </div>
        </div>
    )
}

export default UserInfo;