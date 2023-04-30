import { useEffect, useState } from 'react'
import PostItem from './PostItem'
import { postList } from '../../mock/postList'

const PostList = () => {
  const [pageCount, setPageCount] = useState(0)
  const [fetching, setFetching] = useState(false)
  const [posts, setPosts] = useState<any>([])

  const MAXIMUM_PAGES = 10

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight

    if (scrollTop + clientHeight + 100 >= scrollHeight) {
      fetchMoreData()
    }
  }

  window.addEventListener('scroll', handleScroll)
  useEffect(() => {
    appendData()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const appendData = () => {
    setFetching(true)
    setPosts([...posts, ...postList])
    setPageCount(pageCount + 1)
    setFetching(false)
  }


  const fetchMoreData = () => {
    if (pageCount >= MAXIMUM_PAGES) return
    if (fetching) return

    appendData()
  }
  return (
    <ul>
      {posts.map((post: Post, index) =>
        <li>
          <PostItem key={index} id={index} title={post.title} source={post.source} icon={post.source} />
        </li>
      )}
    </ul>
  )
}

export default PostList