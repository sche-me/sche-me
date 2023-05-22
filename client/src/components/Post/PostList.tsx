import { useDispatch, useSelector } from 'react-redux';
import allAction from '../../redux/actions';
import { useCallback, useEffect, useState } from 'react'
import { Post } from '../../types/Post'
import PostItem from './PostItem'

const PostList = () => {
  const [pageCount, setPageCount] = useState(0)
  const [fetchingPost, setFetchingPost] = useState(false)

  const MAXIMUM_PAGES = 10

  const fetchedPosts = useSelector((state:any) => state.postList);
  const dispatch = useDispatch();

  const handleScroll = () => {
    const {scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight + 100 >= scrollHeight) {
      setFetchingPost(true)
    }
  }

  const fetchArticle = useCallback(()=> {
    dispatch(allAction.loadPostList());
    setPageCount(pageCount + 1)
    setFetchingPost(false)
  },[pageCount])

  useEffect(() => {
    handleScroll()
    setFetchingPost(true)
    window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (fetchingPost) fetchArticle()
    else if (pageCount >= MAXIMUM_PAGES) window.removeEventListener('scroll', handleScroll)
  }, [fetchingPost])

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
