import classes from './Post.module.css'

function Post (props){
    return(
        <li className={classes.Post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.text}</p>
        </li>

    )
}

export default Post