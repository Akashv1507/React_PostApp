import classes from './NewPost.module.css';

function NewPost(props){

    const submitHandler = ()=>{
        console.log("hi")
    }

    return(
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3}  />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required  />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick = {props.cancleHandler}>
          Cancel
        </button>
        <button type="button" onSubmit= {submitHandler}>Submit</button>
      </p>
    </form>)
}
export default NewPost