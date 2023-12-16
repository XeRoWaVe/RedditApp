import Post from "../Post/Post"
import '../Storylist/Storylist.css'


const Storylist = ({redditData}) => {

    return (
        <div className="post-container">
            <Post />
            {/* {redditData.map((item) => {
                return <Post key={item.data.id} author={item.data.author} title={item.data.title} image={item.data.thumbnail} />
            }).catch((err) => console.log(err))} */}
        </div>
    )
}

export default Storylist