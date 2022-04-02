import { UsersItem, Loader, PageList } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersPagin, setUserPage } from "../redux/actions/users";
import { useEffect } from "react";
import { fetchFriends, fetchAddFriend, fetchDeleteFriend } from "../redux/actions/friends";
import { RootState } from "../redux/reducers";
import { FriendType } from "../redux/types/friends";
import { UserType } from "../redux/types/users";

const Users: React.FC = () => {
    let dispatch = useDispatch();
    let { isLoaded, currentUser, users, userPage, userPageCount } = useSelector(({ users }: RootState) => users);
    let { isLoadedFriends, friends } = useSelector(({ friends }: RootState) => friends)
    let clickAddFriend = (friends: FriendType[], currentUser: UserType, user: UserType) => dispatch(fetchAddFriend(friends, currentUser, user));
    let clickDeleteFriend = (friends: FriendType[], currentUserId: number, userId: number) => dispatch(fetchDeleteFriend(friends, currentUserId, userId));
    let onSetUserPage = (page: number) => dispatch(setUserPage(page));
    let pageLimit = 16;

    useEffect(() => {
        dispatch(fetchUsersPagin(userPage, pageLimit));
        dispatch(fetchFriends(currentUser!.id));
    }, [dispatch, currentUser, userPage, pageLimit])

    return (
        <section className="users">
            <div className="users__wrapper">
                {isLoaded && isLoadedFriends ?
                    users.map((el) => (el.id !== currentUser!.id) && < UsersItem key={el.id} currentUser={currentUser} user={{ ...el }} clickAddFriend={clickAddFriend}
                        clickDeleteFriend={clickDeleteFriend} friends={friends} />)
                    : [...Array(16)].map((el, index) => {
                        return <Loader key={`${el}_${index}`} />
                    })}
            </div>
            <PageList pageCount={userPageCount} onSetPage={onSetUserPage} page={userPage} />
        </section>
    )
}

export default Users;