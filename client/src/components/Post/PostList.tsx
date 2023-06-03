import { useDispatch, useSelector } from 'react-redux'
import allAction from '../../redux/actions'
import { useCallback, useEffect, useState } from 'react'
import { Post } from '../../types/Post'
import PostItem from './PostItem'

const PostList = () => {
  const [pageCount, setPageCount] = useState(0)

  const MAXIMUM_PAGES = 10

  const fetchedPosts = useSelector((state: any) => state.postList)
  const dispatch = useDispatch()

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement
    if (scrollTop + clientHeight + 100 >= scrollHeight) {
      fetchArticle()
    }
  }

  const fetchArticle = useCallback(() => {
    dispatch(allAction.loadPostList(false))
    setPageCount(pageCount + 1)
  }, [pageCount])

  useEffect(() => {
    fetchArticle()
    window.addEventListener('scroll', handleScroll)
    if (pageCount >= MAXIMUM_PAGES) window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ul>
      {fetchedPosts.map((post: Post, index: number) => (
        <li>
          <PostItem
            key={index}
            id={index}
            title={post.title}
            url={post.url}
            description={post.description}
          />
        </li>
      ))}
    </ul>
  )
}

export default PostList
