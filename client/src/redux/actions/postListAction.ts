import { Post } from "../../types/Post";

export const loadPostList = () => {
    return{
        type: "LOAD_POSTLIST"
    };
};

export const loadPostListSuccess = (postList: Post[]) => {
    return{
        type: "LOAD_POSTLIST_SUCCESS",
        postList: postList
    };
};

export const loadPostListFail = (error: any) => {
    return{
        type: "LOAD_POSTLIST_FAIL",
        error
    };
};
