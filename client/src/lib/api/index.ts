import axios from 'axios'

const getPostList = () => {
  return axios.get('/api/article')
}

const api = {
  getPostList,
}

export default api
