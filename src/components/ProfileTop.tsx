
interface ProfileTopProps {
    img?: string
    name?: string
    lastName?: string
}

const ProfileTop: React.FC<ProfileTopProps> = ({ img, name, lastName }) => {
    return (
        <div className="profileTop">
            <div className="profileTop__inner">
                <img className="profileTop__foto" src={img} alt={name} />
                <span className="profileTop__name">{`${name} ${lastName}`}</span>
            </div>
        </div>
    )
}

export default ProfileTop