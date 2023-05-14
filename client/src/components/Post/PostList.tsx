import { useDispatch, useSelector } from 'react-redux';
import allAction from '../../redux/actions';
import { useCallback, useEffect, useState } from 'react'
import { Post } from '../../types/Post'
import PostItem from './PostItem'

const PostList = () => {
  const [pageCount, setPageCount] = useState(0)
  const [fetching, setFetching] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])

  const MAXIMUM_PAGES = 10

  const fetchedPosts = useSelector((state:any) => state.postList);
  const dispatch = useDispatch();

  const fetchArticle = useCallback(()=> {
    dispatch(allAction.loadPostList());
    setPosts(fetchedPosts)
    setPageCount(pageCount + 1)
    setFetching(false)
  },[pageCount])

  useEffect(() => {
    const handleScroll = () => {
      const {scrollHeight, scrollTop, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight +100 >= scrollHeight) {
        setFetching(true)
      }
    }
    setFetching(true)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (fetching) fetchArticle()
    else if (pageCount >= MAXIMUM_PAGES) setFetching(false)
  }, [fetching])

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
