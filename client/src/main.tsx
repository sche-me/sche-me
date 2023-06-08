import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import rootReducer from './redux/reducers/index.ts'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './redux/sagas/index.ts'
const sagaMiddleware = createSagaMiddleware()

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
//   }
// }
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__  || compose;
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
