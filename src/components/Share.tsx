
import { Icons } from ".";

import { PostType } from "../redux/types/posts"

interface ShareProps {
    id?: number
    currentPostText: string
    currentPostImage: string
    posts: PostType[]
    name?: string
    img?: string
    onChangePostText: (text: string) => void
    clickAddPost: (id: number, posts: PostType[], currentPostText: string, currentPostImage: string) => void
    onAddPostImage: (image: string) => void
    onFetchRandomPostPhrase: () => void
}

const Share: React.FC<ShareProps> = ({ img, name, currentPostText, currentPostImage, clickAddPost, onChangePostText, onAddPostImage, posts, id, onFetchRandomPostPhrase }) => {
    return (
        <div className="share">
            <div className="share__topWrapper">
                <img className="share__img" src={img} alt={name} />
                <input onChange={(e) => onChangePostText(e.target.value)} type="text" placeholder={`What's on your mind ${name}?`} className="share__input" value={currentPostText} />
            </div>
            <hr className="share__line" />
            <div className="share__bottomWrapper">
                <button onClick={() => onAddPostImage(`https://img.freepik.com/free-photo/_181624-${Math.floor(Math.random() * 20000)}.jpg?size=600`)} className="share__addFotoBtn">
                    <Icons className={!currentPostImage ? "share__addFotoIcon" : "share__addFotoIcon added"} />
                </button>
                <div className="share__bottomInner">
                    {!currentPostText && !currentPostImage ?
                        <button className="share__btn">share</button>
                        : id &&
                        <button onClick={() => clickAddPost(id, posts, currentPostText, currentPostImage)}
                            className="share__btn">share</button>
                    }
                    <button onClick={() => onFetchRandomPostPhrase()} className="randomPhraseBtn">random phrase</button>
                </div>
            </div>
        </div >
    )
}

export default Share;