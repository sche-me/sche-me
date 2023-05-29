import { takeEvery, put, call } from 'redux-saga/effects'
import api from '../../lib/api/index'
import allAction from '../actions/index'
import { AxiosResponse } from 'axios'

function* getPosts() {
  try {
    const posts: AxiosResponse = yield call(api.getPostList)
    yield put(allAction.loadPostListSuccess(posts.data, false))
  } catch (error) {
    yield put(allAction.loadPostListFail(error))
  }
}

function* rootSaga() {
  yield takeEvery('LOAD_POSTLIST', getPosts)
}

export default rootSaga
