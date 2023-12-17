import Post from "../Post/Post"
import '../Storylist/Storylist.css'
import Subreddits from "../Subreddits/Subreddits"


const Storylist = ({redditData}) => {
    return (
        <div className="post-list">
            {redditData.map((item) => 
             <Post key={item.data.id} id={item.data.id} redditData={redditData} title={item.data.title} author={item.data.author} created={item.data.created} image={item.data.thumbnail} subreddit={item.data.subreddit} />)}
        </div>
    )
}

export default Storylist

