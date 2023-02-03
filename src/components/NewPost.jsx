import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost(props){
  const [textVal, setText] = useState('')
  const [authorVal, setAuthor] = useState('')

  const textChangeHandler = (event)=>{
    setText(event.target.value)
  }
  const authorChangeHandler = (event)=>{
    setAuthor(event.target.value)
  }

  const submitHandler = ()=>{
      let postObj = {text: textVal, author:authorVal}
      props.onSubmit(postObj)
      props.onCancel()
  }

  return(
  <form className={classes.form}>
    <p>
      <label htmlFor="body">Text</label>
      <textarea id="body" required rows={3} onChange={textChangeHandler} />
    </p>
    <p>
      <label htmlFor="name">Your name</label>
      <input type="text" id="name" required  onChange={authorChangeHandler}/>
    </p>
    <p className={classes.actions}>
      <button type="button" onClick = {props.onCancel}>
        Cancel
      </button>
      <button type="button" onClick= {submitHandler}>Submit</button>
    </p>
  </form>)
}
export default NewPost