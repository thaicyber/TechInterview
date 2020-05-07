import styled from "styled-components";

const handlerHeight = size => {
  switch (size) {
    case "small": {
      return "1.87rem";
    }
    case "medium": {
      return "2.31rem";
    }
    case "large": {
      return "2.81rem";
    }
    case "smallLarge": {
      return "3.75rem";
    }
    case "midLarge": {
      return "4.68rem";
    }
    case "superLarge": {
      return "9.37rem";
    }
    default: {
      return "1.875rem";
    }
  }
};
const handlerWidth = size => {
  switch (size) {
    case "small": {
      return "1.87rem";
    }
    case "medium": {
      return "2.31rem";
    }
    case "large": {
      return "2.81rem";
    }
    case "smallLarge": {
      return "3.75rem";
    }
    case "midLarge": {
      return "4.68rem";
    }
    case "superLarge": {
      return "9.37rem";
    }
    default: {
      return "1.875rem";
    }
  }
};
const Avatar = styled.figure`
  display: inline-block;
  width: ${props => handlerWidth(props.size)};
  border-radius: 50%;
  height: ${props => handlerHeight(props.size)};
  margin-bottom: 0.5rem;
  background-color: lightgray;
  background-image: url(${props =>
    props.img
      ? props.img
      : "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

export default Avatar;
// https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png
