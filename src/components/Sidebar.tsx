import { Link } from "react-router-dom";
import { Icons } from ".";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import { RootState } from "../redux/reducers";

const Sidebar: React.FC = () => {
    let { page } = useParams<{ page: string }>();
    let currentUser = useSelector(({ users }: RootState) => users.currentUser)
    
    return (
        < aside className="sidebar" >
            <Link to={`/profile/${currentUser?.id}`} className={classNames("sidebar__profileLink",
                { "none": page === "sign-up" || page === "select-user" })}>
                <img className="sidebar__img-foto" src={currentUser?.img ? currentUser.img : "../assets/user.svg"} alt="sidebar img" />
                <div className="sidebar__profileLinkInner">
                    <h4>{currentUser?.name && currentUser?.lastName ? `${currentUser?.name} ${currentUser?.lastName}` : ""}</h4>
                    <p>{currentUser?.email}</p>
                </div>
            </Link>
            <Link to={`/profile/${currentUser?.id}`} className={classNames("sidebar__navLink", {
                "active": page === "profile",
                "none": page === "sign-up" || page === "login" || page === "select-user"
            })}><Icons className={"sidebar__profileIcon"} />Profile</Link>
            <Link to={`/messages/${currentUser?.id}`} className={classNames("sidebar__navLink", {
                "active": page === "messages",
                "none": page === "sign-up" || page === "login" || page === "select-user"
            })}><Icons className={"sidebar__messagesIcon"} />Messages</Link>
            <Link to={`/users/${currentUser?.id}`} className={classNames("sidebar__navLink", { "active": page === "users", "none": page === "sign-up" || page === "login" || page === "select-user" })}><Icons className={"sidebar__usersIcon"} />Users</Link>
        </aside >
    )

}


export default Sidebar;


