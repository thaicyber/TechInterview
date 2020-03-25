export const initialState = {
  addPostErrorReason: "", // 포스트 업로드 실패 사유
  isAddingPost: false, // 포스트 업로드 중
  postAdded: false, // 포스트 업로드 성공
  mainPosts: [], // 화면에 보일 포스트들
  isLoadingMainPosts: false, // 포스트 로딩 중
  isLoadedMainPosts: false, // 포스트 로딩 성공
  loadMainPostsErrorReason: "" // 포스트 로딩 실패 사유
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const LOAD_MAIN_POSTS_REQUEST = "LOAD_MAIN_POSTS_REQUEST";
export const LOAD_MAIN_POSTS_SUCCESS = "LOAD_MAIN_POSTS_SUCCESS";
export const LOAD_MAIN_POSTS_FAILURE = "LOAD_MAIN_POSTS_FAILURE";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST: {
      return {
        ...state,
        isAddingPost: true
      };
    }
    case ADD_POST_SUCCESS: {
      return {
        ...state,
        isAddingPost: false,
        postAdded: true,
        mainPosts: [action.data, ...state.mainPosts]
      };
    }
    case ADD_POST_FAILURE: {
      return {
        ...state,
        isAddingPost: false,
        postAdded: false,
        addPostErrorReason: action.error
      };
    }
    case LOAD_MAIN_POSTS_REQUEST: {
      return {
        ...state,
        isLoadingMainPosts: true
      };
    }
    case LOAD_MAIN_POSTS_SUCCESS: {
      return {
        ...state,
        isLoadingMainPosts: false,
        isLoadedMainPosts: true,
        mainPosts: [...action.data]
      };
    }
    case LOAD_MAIN_POSTS_FAILURE: {
      return {
        ...state,
        isLoadingMainPosts: false,
        isLoadedMainPosts: false,
        addPostErrorReason: action.error
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;
