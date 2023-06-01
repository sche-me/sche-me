import axios from 'axios'

let page = 0 // to be passed by params
const getPostList = () => {
  return axios.get(`/api/articles?page=${page++}`)
}

const api = {
  getPostList,
}

export default api
