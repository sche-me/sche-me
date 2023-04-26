import React from 'react'
import PostItem from './PostItem'
import { postList } from '../../mock/postList'

const PostList = () => {
  return (
    <>
      {postList.map((post) => (
        <PostItem id={post.id} title={post.title} source={post.source} />
      ))}
    </>
  )
}

export default PostList
