import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './Header.module.css';
import NewPost from './NewPost';
import { useState } from 'react';


function Header(){
    const [isNewPostVisible, setNewPostVisible]=useState(false)

    const showPostHandler=()=>{
        setNewPostVisible(true)
    }
    const hidePostHandler=()=>{
        setNewPostVisible(false)
    }

    return(
        <>
        <header className={classes.header}>
        <h1 className={classes.logo}>
            <MdMessage />
            React Post List
        </h1>
        <p>
            <button className={classes.button} onClick={showPostHandler}>
            <MdPostAdd size={18} />
            New Post
            </button>
        </p>
        </header>
        {isNewPostVisible && <NewPost cancleHandler = {hidePostHandler}></NewPost>}
        </>

        
    )
}

export default Header