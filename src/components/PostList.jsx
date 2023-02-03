import classes from './PostList.module.css'
import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';


function PostList(props){
    const [existingPostsList, setPostList]= useState([])


    const submitPostHandler = (newPost)=>{
        setPostList((existingPostsList) => [newPost, ...existingPostsList]);
    }
    
    return(
        <>
        {props.isNewPostVisible && 
        <Modal onModalClick = {props.hidePost}>
            <NewPost onCancel = {props.hidePost} onSubmit = {submitPostHandler}>
            </NewPost>
        </Modal>}
        <ul className={classes.posts}>
            {existingPostsList.map((post)=>(
                <Post key = {post.text} author= {post.author} text={post.text}></Post>
            ))}
        </ul>
        </>
    )
}

export default PostList