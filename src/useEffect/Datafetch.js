import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Datafetch = () => {
  const [post, setPost] = useState([])
  const [id, setId] = useState(1)
  const [idFromButton, seIdFromButton] = useState(1)

  const url = `https://jsonplaceholder.typicode.com/posts/${idFromButton}`

  //   const mapFunc = (obj, index) => <li key={index}> {obj.title}</li>
  const handleIdChange = (e) => setId(e.target.value)
  const handeClick = () => seIdFromButton(id)
  const getResponse = (res) => setPost(res.data)
  const catchError = (err) => console.error(err)

  const useEffectFunc = () => {
    axios.get(url).then(getResponse).catch(catchError)
  }
  useEffect(useEffectFunc, [url])
  return (
    <div>
      <input type='text' value={id} onChange={handleIdChange} />
      <button type='button' onClick={handeClick}>
        {' '}
        fetch data
      </button>
      <h1> post titles</h1>
      <h5>{post.title}</h5>
    </div>
  )
}

export default Datafetch
