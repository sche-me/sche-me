import { takeEvery, put, call } from 'redux-saga/effects';
import api from '../../lib/api/index';
import allAction from '../actions/index';

function* getPosts() {
    console.log("전체 포스트 조회");
    try{
        const { posts } = yield call(api.getPostList);
        console.log(posts);
        yield put(allAction.loadPostListSuccess(posts)); 
    }catch(error){
        yield put(allAction.loadPostListFail(error));
    }
}

function* rootSaga(){
    yield takeEvery("LOAD_POSTLIST", getPosts);
}

export default rootSaga;