import {PostItem} from "../PostItem";

export const PostList = ({posts}) => {
    if (posts.length === 0) {
        return <p>Dang tai du lieu</p>
    }
    
    return (
        <>
            {
                posts.map(post => (
                    <PostItem post={post} key={post.id} />
                ))
            }
        </>
    )
}