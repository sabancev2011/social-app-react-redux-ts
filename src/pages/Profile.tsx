import { UserInfo, ProfileTop, ProfileFriends, Posts } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { changePostText, fetchAddPost, fetchDeletePost, fetchPosts, fetchRandomPostPhrase, addPostImage } from "../redux/actions/posts";
import { fetchUser } from "../redux/actions/users";
import { fetchFriends } from "../redux/actions/friends";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/reducers";
import { PostType } from "../redux/types/posts";

const Profile: React.FC = () => {

    let { userId } = useParams<{ userId: string }>();
    let dispatch = useDispatch();

    let currentUser = useSelector(({ users }: RootState) => users.currentUser);
    let profile = useSelector(({ users }: RootState) => users.profile);
    let { currentPostText, posts, currentPostImage } = useSelector(({ posts }: RootState) => posts);
    let { friends } = useSelector(({ friends }: RootState) => friends);

    let onChangePostText = (text: string) => dispatch(changePostText(text));
    let clickAddPost = (id: number, posts: PostType[], currentPostText: string, currentPostImage: string) => dispatch(fetchAddPost(id, posts, currentPostText, currentPostImage));
    let clickDeletePost = (id: number, postId: number, posts: PostType[]) => dispatch(fetchDeletePost(id, postId, posts));
    let onAddPostImage = (image: string) => dispatch(addPostImage(image));
    let onFetchRandomPostPhrase = () => dispatch(fetchRandomPostPhrase())

    useEffect(() => {
        dispatch(fetchUser(+userId))
        dispatch(fetchFriends(+userId))
        dispatch(fetchPosts(+userId))
    }, [dispatch, userId])

    return (

        <div className="profile">
            <ProfileTop img={profile?.img} name={profile?.name} lastName={profile?.lastName} />
            <div className="profile__wrapper">
                <Posts currentUserId={currentUser?.id} id={profile?.id} posts={posts} name={profile?.name} lastName={profile?.lastName} img={profile?.img}
                    currentPostText={currentPostText} currentPostImage={currentPostImage} clickAddPost={clickAddPost} onChangePostText={onChangePostText}
                    clickDeletePost={clickDeletePost} onAddPostImage={onAddPostImage} onFetchRandomPostPhrase={onFetchRandomPostPhrase} />
                {profile &&
                    <div className="profile__info">
                        <UserInfo info={{ country: profile.country, city: profile.city, email: profile.email, jobTitle: profile.jobTitle, dateOfBirth: profile.dateOfBirth }} />
                        <ProfileFriends friends={friends} />
                    </div>
                }
            </div>
        </div >
    )
}


export default Profile;