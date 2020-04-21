import styled from "styled-components";

const handlerHeight = size => {
  switch (size) {
    case "small": {
      return "30px";
    }
    case "medium": {
      return "37px";
    }
    case "large": {
      return "45px";
    }
    case "midLarge": {
      return "75px";
    }
    case "superLarge": {
      return "150px";
    }
    default: {
      return "30px";
    }
  }
};
const handlerWidth = size => {
  switch (size) {
    case "small": {
      return "30px";
    }
    case "medium": {
      return "37px";
    }
    case "large": {
      return "45px";
    }
    case "midLarge": {
      return "75px";
    }
    case "superLarge": {
      return "150px";
    }
    default: {
      return "30px";
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
      : "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

export default Avatar;
