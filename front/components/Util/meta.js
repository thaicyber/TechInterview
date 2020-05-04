const INDEX = "INDEX";
const PROFILE = "PROFILE";
const HASHTAG = "HASHTAG";
export const getRouteType = route => {
  switch (route) {
    case "index": {
      return INDEX;
    }
    case "profile": {
      return PROFILE;
    }
    case "hashtag": {
      return HASHTAG;
    }
    default:
      return null;
  }
};

export const isMobile = () => {
  return navigator.userAgent.indexOf("Mobi") > -1;
};
