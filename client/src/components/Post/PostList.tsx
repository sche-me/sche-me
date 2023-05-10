import { useDispatch, useSelector } from 'react-redux';
import allAction from '../../redux/actions';
import { useEffect, useState } from 'react'
import { Post } from '../../types/Post'
import PostItem from './PostItem'

const PostList = () => {
  const fetchedPosts = useSelector((state:any) => state.postList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allAction.loadPostList());
  }, []);

  const [pageCount, setPageCount] = useState(0)
  const [fetching, setFetching] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])

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
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const appendData = () => {
    setFetching(true)
    setPosts(fetchedPosts)
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
      {fetchedPosts.map((post: Post, index: number) =>
        <li>
          <PostItem key={index} id={index} title={post.title} source={post.source} icon={post.source} />
        </li>
      )}
    </ul>
  )
}

export default PostList;
