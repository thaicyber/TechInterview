export const initialState = {
  isSigningUp: false, // 회원가입 시도 중
  isSignedUp: false, // 회원가입 성공 유무
  signUpErrorReason: "", // 회원가입 실패사유
  isLoggingIn: false, // 로그인 시도 중
  isLogined: false, // 로그인 성공 유무
  loginErrorReason: "", // 로그인 실패 사유
  me: null // 내 정보
};

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

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
        isSigningUp: false
      };
    }
    case SIGN_UP_FAILURE: {
      return {
        ...state,
        isSignedUp: false,
        isSigningUp: false
      };
    }
  }
};

export default reducer;
