import Header from "./components/header"
import PostList from "./components/PostList"
import { useState } from 'react';

function App(){
  const [isNewPostVisible, setNewPostVisible]=useState(false)

    const showPostHandler=()=>{
        setNewPostVisible(true)
    }
    const hidePostHandler=()=>{
        setNewPostVisible(false)
    }
  return(
  <>
    <Header showPost = {showPostHandler}></Header>
    <PostList isNewPostVisible={isNewPostVisible} hidePost={hidePostHandler}></PostList>
  </>
    ) 
}

export default App