export const initialState = {
  addPostErrorReason: "", // 포스트 업로드 실패 사유
  isAddingPost: false, // 포스트 업로드 중
  postAdded: false, // 포스트 업로드 성공
  mainPosts: [], // 화면에 보일 포스트들
  isLoadingMainPosts: false, // 포스트 로딩 중
  isLoadedMainPosts: false, // 포스트 로딩 성공
  loadMainPostsErrorReason: "", // 포스트 로딩 실패 사유
  loadHashtagPostsErrorReason: "", // 해시태그 포스트 로딩 실패 사유
  isLoadingPost: false, // 포스트 한개 요청 로딩 중
  isLoadedPost: false, // 포스트 한개 요청 성공
  loadPostErrorReason: "", // 포스트 한개 요청 실패 사유
  post: null
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const LOAD_MAIN_POSTS_REQUEST = "LOAD_MAIN_POSTS_REQUEST";
export const LOAD_MAIN_POSTS_SUCCESS = "LOAD_MAIN_POSTS_SUCCESS";
export const LOAD_MAIN_POSTS_FAILURE = "LOAD_MAIN_POSTS_FAILURE";

export const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
export const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
export const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";

export const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
export const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
export const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";

export const LOAD_COMMENTS_REQUEST = "LOAD_COMMENTS_REQUEST";
export const LOAD_COMMENTS_SUCCESS = "LOAD_COMMENTS_SUCCESS";
export const LOAD_COMMENTS_FAILURE = "LOAD_COMMENTS_FAILURE";

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
    case LOAD_HASHTAG_POSTS_REQUEST: {
      return {
        ...state
      };
    }
    case LOAD_HASHTAG_POSTS_SUCCESS: {
      return {
        ...state,
        mainPosts: [...action.data]
      };
    }
    case LOAD_HASHTAG_POSTS_FAILURE: {
      return {
        ...state,
        loadHashtagPostsErrorReason: action.error
      };
    }

    case LOAD_POST_REQUEST: {
      return {
        ...state,
        isLoadingPost: true
      };
    }
    case LOAD_POST_SUCCESS: {
      return {
        ...state,
        isLoadingPost: false,
        isLoadedPost: true,
        post: action.data
      };
    }
    case LOAD_POST_FAILURE: {
      return {
        ...state,
        isLoadingPost: false,
        isLoadedPost: false,
        post: null,
        loadPostErrorReason: action.error
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
