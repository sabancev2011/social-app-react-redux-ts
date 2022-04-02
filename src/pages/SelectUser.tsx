import { SelectUserItem, Loader, PageList } from "../components";
import { setUserPage, fetchUsersPagin, setUser } from "../redux/actions/users";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserType } from "../redux/types/users";
import { RootState } from "../redux/reducers";

const SelectUser: React.FC = () => {
    let dispatch = useDispatch();
    let onSelectUser = (user: UserType) => dispatch(setUser(user));
    let { users, isLoaded, userPageCount, userPage } = useSelector(({ users }: RootState) => users);
    let onSetUserPage = (page: number) => dispatch(setUserPage(page));
    let pageLimit = 20

    useEffect(() => {
        dispatch(fetchUsersPagin(userPage, pageLimit))
    }, [dispatch, userPage, pageLimit]);

    return (
        <section className="selectUser">
            <h1 className="selectUser__title">Select user</h1>
            <div className="selectUser__wrapper">
                {isLoaded ?
                    users.map((el) => < SelectUserItem key={el.id} user={el} onSelectUser={onSelectUser} />)
                    : [...Array(12)].map((el, index) => {
                        return <Loader key={`${el}_${index}`} />
                    })}
            </div>
            <PageList pageCount={userPageCount} onSetPage={onSetUserPage} page={userPage} />
        </section>
    )
}

export default SelectUser;