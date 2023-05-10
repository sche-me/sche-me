const postList = (state=[], action: { type: any; postList: any; error: any; }) => {
    switch(action.type){
        case "LOAD_POSTLIST_SUCCESS":
            return [...state, ...action.postList];
        case "LOAD_POSTLIST_FAIL":
            return [...state,action.error];
        default:
            return state;
    }
};

export default postList;
