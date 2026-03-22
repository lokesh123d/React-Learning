import React from 'react'
import PostLists from './features/posts/PostLists'
import AddPostsForm from './features/posts/AddPostsForm'


const App = () => {
  return (
    <div>
      <PostLists/>
      <AddPostsForm/>
    </div>
  )
}

export default App