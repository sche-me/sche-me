import { Post } from '../../types/Post'

export const loadPostList = (isFetching: boolean) => {
  return {
    type: 'LOAD_POSTLIST',
    isFetching,
  }
}

export const loadPostListSuccess = (postList: Post[], isFetching: boolean) => {
  return {
    type: 'LOAD_POSTLIST_SUCCESS',
    postList: postList,
    isFetching,
  }
}

export const loadPostListFail = (error: any) => {
  return {
    type: 'LOAD_POSTLIST_FAIL',
    error,
  }
}
