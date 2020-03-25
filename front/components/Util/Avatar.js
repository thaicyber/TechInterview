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
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

export default Avatar;
