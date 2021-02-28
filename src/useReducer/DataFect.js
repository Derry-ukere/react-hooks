import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFect = () => {
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState({})
  const [error, setError] = useState('')
  const url = 'https://jsonplaceholder.typicode.com/pos1ts/1'
  const getRespone = (res) => {
    setPost(res.data)
    setLoading(false)
    setError('')
  }
  const catchErrors = (err) => {
    setLoading(false)
    setError('something went wrong bruh!!')
  }
  const useEffectFunc = () => {
    axios.get(url).then(getRespone).catch(catchErrors)
  }
  useEffect(useEffectFunc)
  return (
    <div>
      {loading ? 'loading' : post.title}
      {error ? error : null}
    </div>
  )
}

export default DataFect
