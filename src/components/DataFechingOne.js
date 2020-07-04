import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFechingOne() {
    const[loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() =>{
        axios.get('https://jsonplaceholhder.typicode.com/posts/1')
        .then(Response =>{
            setLoading(false)
            setPost(Response.data)
            setError('')
        })
        .catch(error => {
            setLoading(false)
            setPost({})
            setError('Something Went Wrong!')
        })
    }, [])
    return (
        <div>
            {loading ? 'loading' : post.title}
            {error ? error: null}
        </div>
    )
}

export default DataFechingOne
