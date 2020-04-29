import produce from "immer";

export const initialState = {
  isSigningUp: false, // 회원가입 시도 중
  isSignedUp: false, // 회원가입 성공 유무
  signUpErrorReason: "", // 회원가입 실패사유
  isLoggingIn: false, // 로그인 시도 중
  isLogined: false, // 로그인 성공 유무
  loginErrorReason: "", // 로그인 실패 사유
  me: null, // 로그인 성공시 담기는 내 정보
  isLoggingOut: false, // 로그아웃 시도 중
  companies: null,
  isLoadingCompaniesErrorReason: "",
  userInfo: null, // 타인의 정보
  isFollowing: false, // 팔로우 시도 중
  isFollowed: false, // 팔로우 성공 유무
  isFollowErrorReason: "", // 팔로우 실패 사유,
  followingList: [], // 팔로잉 리스트
  followerList: [], // 팔로워 리스트
  isUnfollowing: false, // 언팔로우 시도 중
  isUnfollowed: false, // 언팔로우 성공 유무
  isUnfollowErrorReason: "", // 언팔로우 실패 사유,
  isLoadFollowers: false, // 팔로워 리스트 불러오기 시도 중
  isLoadedFollwers: false, // 팔로워 리스트 불러오기 성공 유무
  isLoadFollowersErrorReason: "", // 팔로워 리스트 불러오기 실패 사유
  isLoadFollowings: false, // 팔로잉 리스트 불러오기 시도 중
  isLoadedFollwings: false, // 팔로잉 리스트 불러오기 성공 유무
  isLoadFollowingsErrorReason: "" // 팔로잉 리스트 불러오기 실패 사유
};

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const SIGN_UP_FAILURE_RESET = "SIGN_UP_FAILURE_RESET";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const LOAD_COMPANIES_REQUEST = "LOAD_COMPANIES_REQUEST";
export const LOAD_COMPANIES_SUCCESS = "LOAD_COMPANIES_SUCCESS";
export const LOAD_COMPANIES_FAILURE = "LOAD_COMPANIES_FAILURE";

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

export const UPLOAD_PROFILE_IMAGE_REQUEST = "UPLOAD_PROFILE_IMAGE_REQUEST";
export const UPLOAD_PROFILE_IMAGE_SUCCESS = "UPLOAD_PROFILE_IMAGE_SUCCESS";
export const UPLOAD_PROFILE_IMAGE_FAILURE = "UPLOAD_PROFILE_IMAGE_FAILURE";

export const FOLLOW_USER_REQUEST = "FOLLOW_USER_REQUEST";
export const FOLLOW_USER_SUCCESS = "FOLLOW_USER_SUCCESS";
export const FOLLOW_USER_FAILURE = "FOLLOW_USER_FAILURE";

export const UNFOLLOW_USER_REQUEST = "UNFOLLOW_USER_REQUEST";
export const UNFOLLOW_USER_SUCCESS = "UNFOLLOW_USER_SUCCESS";
export const UNFOLLOW_USER_FAILURE = "UNFOLLOW_USER_FAILURE";

export const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOWERS_REQUEST";
export const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
export const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE";

export const LOAD_FOLLOWINGS_REQUEST = "LOAD_FOLLOWINGS_REQUEST";
export const LOAD_FOLLOWINGS_SUCCESS = "LOAD_FOLLOWINGS_SUCCESS";
export const LOAD_FOLLOWINGS_FAILURE = "LOAD_FOLLOWINGS_FAILURE";

export const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_UP_REQUEST: {
        draft.isSigningUp = true;
        break;
      }
      case SIGN_UP_SUCCESS: {
        draft.isSignedUp = true;
        draft.isSigningUp = false;
        break;
      }
      case SIGN_UP_FAILURE: {
        draft.isSignedUp = false;
        draft.isSigningUp = false;
        draft.signUpErrorReason = action.error.response.data;
        break;
      }
      case SIGN_UP_FAILURE_RESET: {
        draft.signUpErrorReason = "";
        break;
      }
      case LOG_IN_REQUEST: {
        draft.isLoggingIn = true;
        break;
      }
      case LOG_IN_SUCCESS: {
        draft.isLogined = true;
        draft.isLoggingIn = false;
        draft.me = action.data;
        break;
      }
      case LOG_IN_FAILURE: {
        draft.isLogined = false;
        draft.isLoggingIn = false;
        break;
      }
      case LOG_OUT_REQUEST: {
        draft.isLoggingOut = true;
        break;
      }
      case LOG_OUT_SUCCESS: {
        draft.isLogined = false;
        draft.isLoggingOut = false;
        draft.me = null;
        break;
      }
      case LOAD_COMPANIES_REQUEST: {
        break;
      }
      case LOAD_COMPANIES_SUCCESS: {
        draft.companies = action.data;
        break;
      }
      case LOAD_COMPANIES_FAILURE: {
        draft.isLoadingCompaniesErrorReason = action.error;
        break;
      }
      case LOAD_USER_REQUEST: {
        break;
      }
      case LOAD_USER_SUCCESS: {
        if (action.me) {
          draft.me = action.data;
          break;
        }
        draft.userInfo = action.data;
        break;
      }
      case LOAD_USER_FAILURE: {
        break;
      }

      case FOLLOW_USER_REQUEST: {
        draft.isFollowing = true;
        break;
      }
      case FOLLOW_USER_SUCCESS: {
        draft.isFollowing = false;
        draft.isFollowed = true;
        draft.me.Followings.push({ id: action.data });
        draft.userInfo.Followers = Number(draft.userInfo.Followers) + 1;
        break;
      }
      case FOLLOW_USER_FAILURE: {
        draft.isFollowing = false;
        draft.isFollowed = false;
        draft.isFollowErrorReason = action.error;
        break;
      }

      case UNFOLLOW_USER_REQUEST: {
        draft.isUnfollowing = true;
        break;
      }
      case UNFOLLOW_USER_SUCCESS: {
        draft.isUnfollowing = false;
        draft.isUnfollowed = true;
        const followIndex = draft.me.Followings.findIndex(
          v => v.id === action.data
        );
        draft.me.Followings.splice(followIndex, 1);
        draft.userInfo.Followers = Number(draft.userInfo.Followers) - 1;
        break;
      }
      case UNFOLLOW_USER_FAILURE: {
        draft.isUnfollowing = false;
        draft.isUnfollowed = false;
        draft.isUnfollowErrorReason = action.error;
        break;
      }

      case LOAD_FOLLOWERS_REQUEST: {
        draft.isLoadFollowers = true;
        break;
      }
      case LOAD_FOLLOWERS_SUCCESS: {
        draft.isLoadFollowers = false;
        draft.isLoadedFollwers = true;
        draft.followerList = [];
        action.data.forEach(follower => {
          draft.followerList.push(follower);
        });
        break;
      }
      case LOAD_FOLLOWERS_FAILURE: {
        draft.isLoadFollowers = false;
        draft.isLoadedFollwers = false;
        draft.isLoadFollowersErrorReason = action.error;
        break;
      }

      case LOAD_FOLLOWINGS_REQUEST: {
        draft.isLoadFollowings = true;
        break;
      }
      case LOAD_FOLLOWINGS_SUCCESS: {
        draft.isLoadFollowings = false;
        draft.isLoadedFollwings = true;
        draft.followingList = [];
        action.data.forEach(following => {
          draft.followingList.push(following);
        });
        break;
      }
      case LOAD_FOLLOWINGS_FAILURE: {
        draft.isLoadFollowings = false;
        draft.isLoadedFollwings = false;
        draft.isLoadFollowingsErrorReason = action.error;
        break;
      }

      default: {
        break;
      }
    }
  });
};

export default reducer;
