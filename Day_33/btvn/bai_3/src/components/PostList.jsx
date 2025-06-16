import {PostItem} from "./PostItem.jsx";

export const PostList = ({posts}) => {
    if (posts.length === 0) {
        return <p>Dang tai du lieu</p>
    }
    return (
        <div>
            {
                posts.map(post => (
                    <PostItem key={post.id} post={post} />
                ))
            }
        </div>
    )
}