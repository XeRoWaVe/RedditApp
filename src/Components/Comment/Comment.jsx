import './Comment.css'

const Comment = (props) => {
    return (
        <div className="container">
           <p>Author: <a href={`https://www.reddit.com/user/${props.author}`} target="_blank" >{props.author}</a></p>
            <p>Body: {props.body}</p>
            <p>Created: {props.created}</p>
        </div>
    )
}

export default Comment