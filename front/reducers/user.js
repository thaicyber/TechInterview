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
  switch (action.type) {
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        isSigningUp: true
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isSignedUp: true,
        isSigningUp: false,
        me: action
      };
    }
    case SIGN_UP_FAILURE: {
      return {
        ...state,
        isSignedUp: false,
        isSigningUp: false
      };
    }
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoggingIn: true
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLogined: true,
        isLoggingIn: false,
        me: action.data
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLogined: false,
        isLoggingIn: false
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggingOut: true
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        isLogined: false,
        isLoggingOut: false,
        me: null
      };
    }
    case LOAD_COMPANIES_REQUEST: {
      return {
        ...state
      };
    }
    case LOAD_COMPANIES_SUCCESS: {
      return {
        ...state,
        companies: action.data
      };
    }
    case LOAD_COMPANIES_FAILURE: {
      return {
        ...state,
        isLoadingCompaniesErrorReason: action.error
      };
    }
    case LOAD_USER_REQUEST: {
      return {
        ...state
      };
    }
    case LOAD_USER_SUCCESS: {
      if (action.me) {
        return {
          ...state,
          me: action.data
        };
      }
      return {
        ...state,
        userInfo: action.data
      };
    }
    case LOAD_USER_FAILURE: {
      return {
        ...state
      };
    }

    case FOLLOW_USER_REQUEST: {
      return {
        ...state,
        isFollowing: true
      };
    }
    case FOLLOW_USER_SUCCESS: {
      return {
        ...state,
        isFollowing: false,
        isFollowed: true,
        me: {
          ...state.me,
          Followings: [...state.me.Followings, { id: action.data }]
        },
        userInfo: {
          ...state.userInfo,
          Followings: state.me.Followings.length
        }
      };
    }
    case FOLLOW_USER_FAILURE: {
      return {
        ...state,
        isFollowing: false,
        isFollowed: false,
        isFollowErrorReason: action.error
      };
    }

    case UNFOLLOW_USER_REQUEST: {
      return {
        ...state,
        isUnfollowing: true
      };
    }
    case UNFOLLOW_USER_SUCCESS: {
      return {
        ...state,
        isUnfollowing: false,
        isUnfollowed: true,
        me: {
          ...state.me,
          Followings: state.me.Followings.filter(v => v.id !== action.data)
        }
      };
    }
    case UNFOLLOW_USER_FAILURE: {
      return {
        ...state,
        isUnfollowing: false,
        isUnfollowed: false,
        isUnfollowErrorReason: action.error
      };
    }

    case LOAD_FOLLOWERS_REQUEST: {
      return {
        ...state,
        isLoadFollowers: true
      };
    }
    case LOAD_FOLLOWERS_SUCCESS: {
      return {
        ...state,
        isLoadFollowers: false,
        isLoadedFollwers: true,
        followerList: action.data
      };
    }
    case LOAD_FOLLOWERS_FAILURE: {
      return {
        ...state,
        isLoadFollowers: false,
        isLoadedFollwers: false,
        isLoadFollowersErrorReason: action.error
      };
    }

    case LOAD_FOLLOWINGS_REQUEST: {
      return {
        ...state,
        isLoadFollowings: true
      };
    }
    case LOAD_FOLLOWINGS_SUCCESS: {
      return {
        ...state,
        isLoadFollowings: false,
        isLoadedFollwings: true,
        followingList: action.data
      };
    }
    case LOAD_FOLLOWINGS_FAILURE: {
      return {
        ...state,
        isLoadFollowings: false,
        isLoadedFollwings: false,
        isLoadFollowingsErrorReason: action.error
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
