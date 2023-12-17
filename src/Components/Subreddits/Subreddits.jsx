import './Subreddits.css'

const Subreddits = ({setSubreddit}) => {
    return (
        <div className='container'>
            <ul className='list'>
                <button onClick={() => setSubreddit('OnePiece')} >AskReddit</button>
                <button onClick={() => setSubreddit('reactjs')} >reactjs</button>
                <button onClick={() => setSubreddit('Overwatch')} >Overwatch</button>
                <button onClick={() => setSubreddit('Science')} >Science</button>
                <button onClick={() => setSubreddit('wow')} >wow</button>
                <button onClick={() => setSubreddit('blackdesertonline')} >blackdesertonline</button>
            </ul>
        </div>
    )
}

export default Subreddits