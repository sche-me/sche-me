const postList = (
  state = [],
  action: { type: any; postList: any; error: any; isFetching: boolean }
) => {
  switch (action.type) {
    case 'LOAD_POSTLIST_SUCCESS':
      if (action.isFetching === false) {
        action.isFetching = true
      }
      return [...state, ...action.postList]

    case 'LOAD_POSTLIST_FAIL':
      return [...state, action.error]

    default:
      if (action.isFetching === false) {
        action.isFetching = true
      }
      return state
  }
}

export default postList
