// import React from 'react'
// import PostItem from './PostItem'
// import { postList } from '../../mock/postList'

// const PostList = () => {
//   return (
//     <>
//       {postList.map((post) => (
//         <PostItem id={post.id} title={post.title} source={post.source} />
//       ))}
//     </>
//   )
// }

// export default PostList

import { useEffect, useState } from 'react'
import PostItem from './PostItem'
import { postList } from '../../mock/postList'
import { PostProps } from '../../types/PostProps'

const PostList = () => {
  const previousData: any[] = []
  const [pageCount, setPageCount] = useState(0)
  const [fetching, setFetching] = useState(false)
  const [myData, setMyData] = useState<any>([])

  const getPreviousData = () => {
    for (let i = 0; i < postList.length; i++) {
      const data = {
        title: postList[i]?.title,
        icon: postList[i]?.icon,
        source: postList[i]?.source,
      }
      previousData.push(data)
    }
  }

  getPreviousData()

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight

    if (fetching === false && scrollTop + clientHeight >= scrollHeight) {
      fetchMoreData()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const fetchMoreData = () => {
    setFetching(true)

    if (pageCount >= previousData.length) {
      return
    }

    const fetchedData = previousData[pageCount]
    const mergedData = myData.concat(fetchedData)
    setMyData(mergedData)
    setPageCount(pageCount + 1)

    setFetching(false)
  }
  return (
    <ul>
      {previousData.map((post) => (
        <li>
          <PostItem key={post.id} id={post.id} title={post.title} source={post.source} icon={post.source} />
        </li>
      ))}
      {myData.map((post: { id: number; title: string; source: string }) => (
        <li>
          <PostItem key={post.id} id={post.id} title={post.title} source={post.source} icon={post.source}/>
        </li>
      ))}
    </ul>
  )
}

export default PostList