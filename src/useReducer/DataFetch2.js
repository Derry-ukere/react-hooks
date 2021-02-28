import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const success = 'success'
const fail = 'fail'
const initialState = {
  loading: true,
  post: {},
  error: '',
}
const reducer = (state, action) => {
  switch (action.type) {
    case success:
      return {
        loading: false,
        post: action.payload,
        error: '',
      }
    case fail:
      return {
        loading: false,
        post: {},
        error: 'Something went worng again bro!!',
      }

    default:
      return initialState
  }
}

const DataFetch2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const getRes = (res) => dispatch({ type: success, payload: res.data })
  const catchErr = (err) => dispatch({ type: fail })
  const url = 'https://jsonplaceholder.typicode.com/posts/1'
  const handleSideEff = () => {
    axios.get(url).then(getRes).catch(catchErr)
  }
  useEffect(handleSideEff)

  return (
    <div>
      {state.loading ? 'loading' : state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default DataFetch2
