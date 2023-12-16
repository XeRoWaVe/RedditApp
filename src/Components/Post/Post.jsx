const Post = (props) => {
    return (
        <div>
            <div>
                <h1>{props.title}</h1>
                <h2>{props.author}</h2>
                <span><img src={props.image} /></span>
                <div>
                    <p>posted By</p>
                    <p>posted when</p>
                    <p>comments button</p>
                </div>
            </div>
        </div>
    )
}

export default Post