import './Navigation.css'
import { useCallback, useState, useRef } from 'react'

const Navigation = ({setRedditData, setSubreddit}) => {
    const [term, setTerm] = useState('')
    const inputRef = useRef(null)
    // const handleChange = (e) => {
    //     e.preventDefault()
    //     const target = e.target.value
    //     const encodeTerm = encodeURIComponent(target)
    //     setTerm(encodeTerm)
    //     console.log(term)
    // }
    const handleChange = (e) => {
        e.preventDefault()
        const encodeTerm = encodeURIComponent(e.target.value)
        setTerm(encodeTerm)


    }
    console.log(term)
    const handleSubmit = (e) => {
        fetch(`https://www.reddit.com/search.json?q=${term}`)
        .then((res) => res.json())
        .then((jsonRes) => setRedditData(jsonRes.data.children))
        .catch(err => console.log(err))
    }

    return (
        <div className="navigation font-bold flex justify-evenly items-center border-2 border-solid m-2 p-2">
            
            <a href="/" onClick={() => setSubreddit('home')}><img className='h-12 animate-bounce' src="https://seeklogo.com/images/R/reddit-logo-23F13F6A6A-seeklogo.com.png" /></a>
            <h1>XeRoWaVe Reddit</h1>
            <div>
            <input placeholder="Search" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Search</button>
            </div>


        </div>
    )
}

export default Navigation