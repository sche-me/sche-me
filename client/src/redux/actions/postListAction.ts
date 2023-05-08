import { Post } from "../../types/Post";

export const loadPostList = () => {
    return{
        type: "LOAD_POSTLIST"
    };
};

export const loadPostListSuccess = (postlists: Post) => {
    return{
        type: "LOAD_POSTLIST_SUCCESS",
        postlist: postlists
    };
};

export const loadPostListFail = (error: any) => {
    return{
        type: "LOAD_POSTLIST_FAIL",
        error
    };
};

