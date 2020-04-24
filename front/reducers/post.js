import produce from "immer";

export const initialState = {
  addPostErrorReason: "", // 포스트 업로드 실패 사유
  isAddingPost: false, // 포스트 업로드 중
  postAdded: false, // 포스트 업로드 성공
  mainPosts: [], // 화면에 보일 포스트들
  isLoadingHashtagPosts: false, // 해시태그 포스트 로딩 중
  isLoadedHashtagPosts: false, // 해시태그 포스트 로딩 성공
  loadHashtagPostsErrorReason: "", // 해시태그 포스트 로딩 실패 사유
  hashtagPosts: [], // 해시태그 포스트 목록
  isLoadingUserPosts: false, // 유저 포스트 목록 로딩 중
  isLoadedUserPosts: false, // 유저 포스트 목록 로딩 성공
  loadUserPostsErrorReason: "", // 유저 포스트 목록 로딩 실패 사유
  userPosts: [], // 유저 포스트 목록
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
  return produce(state, draft => {
    switch (action.type) {
      case ADD_POST_REQUEST: {
        draft.isAddingPost = true;
        break;
      }
      case ADD_POST_SUCCESS: {
        draft.isAddingPost = false;
        draft.postAdded = true;
        draft.mainPosts.unshift(action.data);
        break;
      }
      case ADD_POST_FAILURE: {
        draft.isAddingPost = false;
        draft.postAdded = false;
        draft.addPostErrorReason = action.error;
        break;
      }
      case LOAD_HASHTAG_POSTS_REQUEST: {
        draft.isLoadingHashtagPosts = true;
        break;
      }
      case LOAD_HASHTAG_POSTS_SUCCESS: {
        draft.isLoadingHashtagPosts = false;
        draft.isLoadedMainPosts = true;
        draft.hashtagPosts = action.data;
        break;
      }
      case LOAD_HASHTAG_POSTS_FAILURE: {
        draft.loadHashtagPostsErrorReason = action.error;
        break;
      }

      case LOAD_USER_POSTS_REQUEST: {
        draft.isLoadingUserPosts = true;
        break;
      }
      case LOAD_USER_POSTS_SUCCESS: {
        draft.isLoadingUserPosts = false;
        draft.isLoadedUserPosts = true;
        draft.userPosts = action.data;
        break;
      }
      case LOAD_MAIN_POSTS_FAILURE: {
        draft.isLoadingUserPosts = false;
        draft.isLoadedUserPosts = false;
        draft.loadUserPostsErrorReason = action.error;
        break;
      }
      case LOAD_MAIN_POSTS_REQUEST: {
        draft.isLoadingMainPosts = true;
        draft.mainPosts = action.lastId === 0 ? [] : draft.mainPosts;
        draft.hasMorePost = action.lastId ? draft.hasMorePost : true;
        break;
      }
      case LOAD_MAIN_POSTS_SUCCESS: {
        if (state.mainPosts.length >= state.postsCount) {
          break;
        }
        draft.isLoadingMainPosts = false;
        draft.isLoadedMainPosts = true;
        action.data.forEach(post => {
          draft.mainPosts.push(post);
        });
        draft.hasMorePost = action.data.length === 10;
        break;
      }
      case LOAD_MAIN_POSTS_FAILURE: {
        draft.isLoadingMainPosts = false;
        draft.isLoadedMainPosts = false;
        draft.addPostErrorReason = action.error;
        break;
      }

      case LOAD_POST_REQUEST: {
        draft.isLoadingPost = true;
        break;
      }
      case LOAD_POST_SUCCESS: {
        draft.isLoadingPost = false;
        draft.isLoadedPost = true;
        draft.post = action.data;
        break;
      }
      case LOAD_POST_FAILURE: {
        draft.isLoadingPost = false;
        draft.isLoadedPost = false;
        draft.post = null;
        draft.loadPostErrorReason = action.error;
        break;
      }

      case LOAD_COMMENTS_REQUEST: {
        draft.isLoadingComments = true;
        break;
      }
      case LOAD_COMMENTS_SUCCESS: {
        draft.isLoadingComments = false;
        draft.isLoadedComments = true;
        draft.comments = action.data;
        break;
      }
      case LOAD_COMMENTS_FAILURE: {
        draft.isLoadingComments = false;
        draft.isLoadedComments = false;
        draft.comments = null;
        draft.isLoadCommentsErrorReason = action.error;
        break;
      }
      case ADD_COMMENT_REQUEST: {
        draft.isAddingComment = true;
        break;
      }
      case ADD_COMMENT_SUCCESS: {
        draft.isAddingComment = false;
        draft.commentAdded = true;
        draft.comments.push(action.data);
        break;
      }
      case ADD_COMMENT_FAILURE: {
        draft.isAddingComment = false;
        draft.commentAdded = false;
        draft.comments = null;
        draft.isAddCommentErrorReason = action.error;
        break;
      }
      case DELETE_COMMENT_REQUEST: {
        draft.isDeletingComment = true;
        break;
      }
      case DELETE_COMMENT_SUCCESS: {
        draft.isDeletingComment = false;
        draft.deletedComment = true;
        const index = draft.comments.findIndex(
          v => v.id === action.data.commentId
        );
        draft.comments.splice(index, 1);
        break;
      }
      case DELETE_COMMENT_FAILURE: {
        draft.isDeletingComment = false;
        draft.deletedComment = false;
        draft.deleteCommentErrorReason = action.error;
        break;
      }

      case EDIT_COMMENT_REQUEST: {
        draft.isEditingComment = true;
        break;
      }
      case EDIT_COMMENT_SUCCESS: {
        draft.isEditingComment = false;
        draft.editedComment = true;
        draft.comments = null;
        break;
      }
      case EDIT_COMMENT_FAILURE: {
        draft.isEditingComment = false;
        draft.editedComment = false;
        draft.editCommentErrorReason = action.error;
        break;
      }

      case LIKE_POST_REQUEST: {
        draft.isLikingPost = true;
        break;
      }
      case LIKE_POST_SUCCESS: {
        if (action.data.route === "HASHTAG") {
          const hashtagPostIndex = draft.hashtagPosts.findIndex(
            v => v.id === action.data.postId
          );
          draft.hashtagPosts[hashtagPostIndex].Likers.push({
            id: action.data.userId
          });
        }
        if (action.data.route === "PROFILE") {
          const profilePostIndex = draft.userPosts.findIndex(
            v => v.id === action.data.postId
          );
          draft.userPosts[profilePostIndex].Likers.push({
            id: action.data.userId
          });
        }
        //mainPosts
        const postIndex = draft.mainPosts.findIndex(
          v => v.id === action.data.postId
        );
        draft.mainPosts[postIndex].Likers.push({ id: action.data.userId });
        draft.isLikingPost = false;
        break;
      }
      case LIKE_POST_FAILURE: {
        draft.isLikingPost = false;
        draft.likePostErrorReason = action.error;
        break;
      }

      case UNLIKE_POST_REQUEST: {
        draft.isUnlikingPost = true;
        break;
      }
      case UNLIKE_POST_SUCCESS: {
        if (action.data.route === "HASHTAG") {
          const hashtagPostIndex = draft.hashtagPosts.findIndex(
            v => v.id === action.data.postId
          );
          const hashtagLikeIndex = draft.hashtagPosts[
            hashtagPostIndex
          ].Likers.findIndex(v => v.id === action.data.userId);
          draft.hashtagPosts[hashtagPostIndex].Likers.splice(
            hashtagLikeIndex,
            1
          );
        }
        if (action.data.route === "PROFILE") {
          const profilePostIndex = draft.userPosts.findIndex(
            v => v.id === action.data.postId
          );
          const profileLikeIndex = draft.userPosts[
            profilePostIndex
          ].Likers.findIndex(v => v.id === action.data.userId);
          draft.userPosts[profilePostIndex].Likers.splice(profileLikeIndex, 1);
        }

        //mainPosts
        const postIndex = draft.mainPosts.findIndex(
          v => v.id === action.data.postId
        );
        const likeIndex = draft.mainPosts[postIndex].Likers.findIndex(
          v => v.id === action.data.userId
        );
        draft.mainPosts[postIndex].Likers.splice(likeIndex, 1);
        draft.isUnlikingPost = false;
        break;
      }
      case UNLIKE_POST_FAILURE: {
        draft.isUnlikingPost = false;
        draft.unlikePostErrorReason = action.error;
        break;
      }

      case LOAD_POST_LIKERS_REQUEST: {
        draft.isLoadingPostLikers = true;
        break;
      }
      case LOAD_POST_LIKERS_SUCCESS: {
        draft.isLoadingPostLikers = false;
        draft.postLikers = action.data;
        break;
      }
      case LOAD_POST_LIKERS_FAILURE: {
        draft.isLoadingPostLikers = false;
        draft.editedComment = false;
        draft.isLoadPostLikersErrorReason = action.error;
        break;
      }

      case LOAD_COUNT_POSTS_REQUEST: {
        break;
      }
      case LOAD_COUNT_POSTS_SUCCESS: {
        draft.postsCount = action.data.length;
        break;
      }
      case LOAD_COUNT_POSTS_FAILURE: {
        break;
      }

      default: {
        break;
      }
    }
  });
};

export default reducer;
