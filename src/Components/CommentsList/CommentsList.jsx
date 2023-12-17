import Comment from "../Comment/Comment"

const CommentsList = ({commentData}) => {
    return (
        <div>
            {commentData.map((item) => 
            <Comment key={item.data.id} body={item.data.body} author={item.data.author} created={item.data.created}  />
            )}
        </div>
    )
}

export default CommentsList