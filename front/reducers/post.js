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
  post: null, // comment 페이지 접속하면 나오는 post
  comments: null, // comment 페이지 접속하면 나오는 comments
  isAddingComment: false, // 댓글 업로드 중
  commentAdded: false, // 댓글 업로드 성공
  isAddCommentErrorReason: "", // 댓글 업로드 실패 사유
  isLoadingComments: false, // 댓글들 로드중
  isLoadedComments: false, // 댓글들 로딩 성공
  isLoadCommentsErrorReason: "" // 댓글 업로드 실패 사유
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

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

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

    case LOAD_COMMENTS_REQUEST: {
      return {
        ...state,
        isLoadingComments: true
      };
    }
    case LOAD_COMMENTS_SUCCESS: {
      return {
        ...state,
        isLoadingComments: false,
        isLoadedComments: true,
        comments: [...action.data]
      };
    }
    case LOAD_COMMENTS_FAILURE: {
      return {
        ...state,
        isLoadingComments: false,
        isLoadedComments: false,
        comments: null,
        isLoadCommentsErrorReason: action.error
      };
    }

    case ADD_COMMENT_REQUEST: {
      return {
        ...state,
        isAddingComment: true
      };
    }
    case ADD_COMMENT_SUCCESS: {
      return {
        ...state,
        isAddingComment: false,
        commentAdded: true,
        comments: [...state.comments, ...action.data]
      };
    }
    case ADD_COMMENT_FAILURE: {
      return {
        ...state,
        isAddingComment: false,
        commentAdded: false,
        comments: null,
        isAddCommentErrorReason: action.error
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
