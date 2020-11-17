import React,{ useContext } from 'react'
import Postslist from './postListContext'

function PostListBlock() {
    const postlist = useContext(Postslist)
    console.log(postlist);
    return (
        <div >
            <div>{ postlist.map(
                (post) =><div key={post.id}>{post.id}.......{post.title}<br></br></div>
            ) }</div>
        </div>
    )
}



export default PostListBlock
