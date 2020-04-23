export const initialState = {
  addPostErrorReason: "", // 포스트 업로드 실패 사유
  isAddingPost: false, // 포스트 업로드 중
  postAdded: false, // 포스트 업로드 성공
  mainPosts: [], // 화면에 보일 포스트들
  isLoadingHashtagPosts: false, // 해시태그 포스트 로딩 중
  isLoadedHashtagPosts: false, // 해시태그 포스트 로딩 성공
  loadHashtagPostsErrorReason: "", // 해시태그 포스트 로딩 실패 사유
  hashtagPosts: [], // 해시태그 포스트 목록
  isLoadingHashtagPosts: false, // 포스트 로딩 중
  isLoadedMainPosts: false, // 포스트 로딩 성공
  loadMainPostsErrorReason: "", // 포스트 로딩 실패 사유
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
  isLoadCommentsErrorReason: "", // 댓글 업로드 실패 사유
  isDeletingComment: false, // 댓글 삭제 시도 중
  deletedComment: false, // 댓글 삭제 성공
  deleteCommentErrorReason: "", // 댓글 삭제 실패 사유
  isEditingComment: false, // 댓글 수정 시도 중
  editedComment: false, // 댓글 수정 성공
  editCommentErrorReason: "", // 댓글 수정 실패 사유
  isLikingPost: false, // 좋아요 시도 중
  likePostErrorReason: "", // 좋아요 시도 실패 사유
  isUnlikingPost: false, // 좋아요 취소 시도 중
  unlikePostErrorReason: "", //좋아요 취소 시도 실패 사유
  isLoadingPostLikers: false, // 게시물에 좋아요한 사람들 불러오기 시도 중
  postLikers: false, // 게시물에 좋아요한 사람들 불러오기 성공
  isLoadPostLikersErrorReason: "", // 게시물에 좋아요한 사람들 불러오기 실패 사유
  hasMorePost: false,
  postsCount: 0
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

export const DELETE_COMMENT_REQUEST = "DELETE_COMMENT_REQUEST";
export const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";
export const DELETE_COMMENT_FAILURE = "DELETE_COMMENT_FAILURE";

export const EDIT_COMMENT_REQUEST = "EDIT_COMMENT_REQUEST";
export const EDIT_COMMENT_SUCCESS = "EDIT_COMMENT_SUCCESS";
export const EDIT_COMMENT_FAILURE = "EDIT_COMMENT_FAILURE";

export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

export const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";

export const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
export const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
export const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";

export const LOAD_POST_LIKERS_REQUEST = "LOAD_POST_LIKERS_REQUEST";
export const LOAD_POST_LIKERS_SUCCESS = "LOAD_POST_LIKERS_SUCCESS";
export const LOAD_POST_LIKERS_FAILURE = "LOAD_POST_LIKERS_FAILURE";

export const LOAD_COUNT_POSTS_REQUEST = "LOAD_COUNT_POSTS_REQUEST";
export const LOAD_COUNT_POSTS_SUCCESS = "LOAD_COUNT_POSTS_SUCCESS";
export const LOAD_COUNT_POSTS_FAILURE = "LOAD_COUNT_POSTS_FAILURE";

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
    case LOAD_HASHTAG_POSTS_REQUEST: {
      return {
        ...state,
        isLoadingHashtagPosts: true
      };
    }
    case LOAD_HASHTAG_POSTS_SUCCESS: {
      return {
        ...state,
        isLoadingHashtagPosts: false,
        isLoadedMainPosts: true,
        hashtagPosts: action.data
      };
    }
    case LOAD_HASHTAG_POSTS_FAILURE: {
      return {
        ...state,
        loadHashtagPostsErrorReason: action.error
      };
    }

    case LOAD_USER_POSTS_REQUEST: {
      return {
        ...state,
        isLoadingHashtagPosts: true
      };
    }
    case LOAD_MAIN_POSTS_REQUEST: {
      return {
        ...state,
        isLoadingMainPosts: true,
        mainPosts: action.lastId === 0 ? [] : state.mainPosts,
        hasMorePost: action.lastId ? state.hasMorePost : true
      };
    }
    case LOAD_USER_POSTS_SUCCESS:
    case LOAD_MAIN_POSTS_SUCCESS: {
      if (state.mainPosts.length >= state.postsCount) {
        return {
          ...state
        };
      }
      return {
        ...state,
        isLoadingMainPosts: false,
        isLoadedMainPosts: true,
        mainPosts: state.mainPosts.concat(action.data),
        hasMorePost: action.data.length === 10
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
        comments: [...state.comments, action.data]
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
    case DELETE_COMMENT_REQUEST: {
      return {
        ...state,
        isDeletingComment: true
      };
    }
    case DELETE_COMMENT_SUCCESS: {
      return {
        ...state,
        isDeletingComment: false,
        deletedComment: true,
        comments: state.comments.filter(v => v.id != action.data.commentId)
      };
    }
    case DELETE_COMMENT_FAILURE: {
      return {
        ...state,
        isDeletingComment: false,
        deletedComment: false,
        deleteCommentErrorReason: action.error
      };
    }

    case EDIT_COMMENT_REQUEST: {
      return {
        ...state,
        isEditingComment: true
      };
    }
    case EDIT_COMMENT_SUCCESS: {
      return {
        ...state,
        isEditingComment: false,
        editedComment: true,
        comments: null
      };
    }
    case EDIT_COMMENT_FAILURE: {
      return {
        ...state,
        isEditingComment: false,
        editedComment: false,
        editCommentErrorReason: action.error
      };
    }

    case LIKE_POST_REQUEST: {
      return {
        ...state,
        isLikingPost: true
      };
    }
    case LIKE_POST_SUCCESS: {
      const postIndex = state.mainPosts.findIndex(
        v => v.id === action.data.postId
      );
      const post = state.mainPosts[postIndex];
      const Likers = [...post.Likers, { id: action.data.userId }];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Likers };
      return {
        ...state,
        isLikingPost: false,
        mainPosts
      };
    }
    case LIKE_POST_FAILURE: {
      return {
        ...state,
        isLikingPost: false,
        likePostErrorReason: action.error
      };
    }

    case UNLIKE_POST_REQUEST: {
      return {
        ...state,
        isUnlikingPost: true
      };
    }
    case UNLIKE_POST_SUCCESS: {
      const postIndex = state.mainPosts.findIndex(
        v => v.id === action.data.postId
      );
      const post = state.mainPosts[postIndex];
      const Likers = post.Likers.filter(v => v.id !== action.data.userId);
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Likers };
      return {
        ...state,
        isUnlikingPost: false,
        mainPosts
      };
    }
    case UNLIKE_POST_FAILURE: {
      return {
        ...state,
        isUnlikingPost: false,
        unlikePostErrorReason: action.error
      };
    }

    case LOAD_POST_LIKERS_REQUEST: {
      return {
        ...state,
        isLoadingPostLikers: true
      };
    }
    case LOAD_POST_LIKERS_SUCCESS: {
      return {
        ...state,
        isLoadingPostLikers: false,
        postLikers: action.data
      };
    }
    case LOAD_POST_LIKERS_FAILURE: {
      return {
        ...state,
        isLoadingPostLikers: false,
        editedComment: false,
        isLoadPostLikersErrorReason: action.error
      };
    }

    case LOAD_COUNT_POSTS_REQUEST: {
      return {
        ...state
      };
    }
    case LOAD_COUNT_POSTS_SUCCESS: {
      return {
        ...state,
        postsCount: action.data.length
      };
    }
    case LOAD_COUNT_POSTS_FAILURE: {
      return {
        ...state
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
