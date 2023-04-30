import { takeEvery, put, call } from 'redux-saga/effects';
import api from '../../lib/api/index';
import allAction from '../actions/index';

function* getCourier() {
    console.log("택배사 불러오기 성공");
    try{
        const { data } = yield call(api.searchCourier);
        console.log(data);
        yield put(allAction.loadCourierSuccess(data));
    }catch(error){
        yield put(allAction.loadCourierFail(error));
    }
}

function* rootSaga(){
    yield takeEvery("LOAD_COURIER", getCourier);
}

export default rootSaga;