import Share from "./Share";
import PostItem from "./PostItem";
import { PostType } from "../redux/types/posts";

interface PostProps {
    currentUserId?: number
    id?: number
    currentPostText: string
    currentPostImage: string
    posts: PostType[]
    name?: string
    lastName?: string
    img?: string
    onChangePostText: (text: string) => void
    clickAddPost: (id: number, posts: PostType[], currentPostText: string, currentPostImage: string) => void
    clickDeletePost: (id: number, postId: number, posts: PostType[]) => void
    onAddPostImage: (image: string) => void
    onFetchRandomPostPhrase: () => void
}


const Posts: React.FC<PostProps> = ({ currentUserId, id, currentPostText, currentPostImage, clickAddPost, 
    onChangePostText, clickDeletePost, onAddPostImage, posts, name, lastName, img, onFetchRandomPostPhrase }) => {
    return (
        <div className="posts">
            {id === currentUserId &&
                <Share img={img} name={name} currentPostText={currentPostText}
                clickAddPost={clickAddPost} onChangePostText={onChangePostText} onAddPostImage={onAddPostImage} posts={posts}
                    id={id} currentPostImage={currentPostImage} onFetchRandomPostPhrase={onFetchRandomPostPhrase} />} 
            {posts && posts.map((el) => {
                return <PostItem id={id} name={name} lastName={lastName} img={img} postText={el.postText} postImage={el.postImage} key={el.postId}
                    postId={el.postId} clickDeletePost={clickDeletePost} posts={posts} currentUserId={currentUserId} currentPostTime={el.currentPostTime} />
            })}
        </div>
    )
}

export default Posts;