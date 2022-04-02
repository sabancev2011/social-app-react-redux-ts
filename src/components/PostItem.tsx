import { PostType } from "../redux/types/posts"

interface PostItemProps {
    id?: number
    name?: string
    img?: string
    postText: string
    postImage: string
    clickDeletePost: (id: number, postId: number, posts: PostType[]) => void
    postId: number
    posts: PostType[]
    currentUserId?: number
    currentPostTime: string
    lastName?: string
}

const PostItem: React.FC<PostItemProps> = ({ id, name, img, postText, postImage, clickDeletePost, postId, posts, currentUserId, currentPostTime, lastName }) => {
    return (
        <div className="postItem">
            {id && id === currentUserId &&
                <button className="postItem_deleteBtn" onClick={() => clickDeletePost(id, postId, posts)}></button>
            }
            <div className="postItem__top">
                <img className="postItem__userFoto" src={img} alt={`${name} ${lastName}`} />
                <div className="postItem__userName">{`${name} ${lastName}`}</div>
                <div className="postItem__time">{currentPostTime}</div>
            </div>
            {postText &&
                <div className="postItem__text">{postText}</div>
            }
            {postImage &&
                <div className="postItem__img">
                    <img src={postImage} alt="postItem" />
                </div>
            }
        </div>
    )
}

export default PostItem;