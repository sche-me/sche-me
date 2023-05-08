const postlists = (state=[], action: { type: any; postlists: any; error: any; }) => {
    switch(action.type){
        case "LOAD_POSTLIST_SUCCESS":
            return [...state, ...action.postlists];
        case "LOAD_POSTLIST_FAIL":
            return [...state,action.error];
        default:
            return state;
    }
};

export default postlists;