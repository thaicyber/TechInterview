import styled from "styled-components";

const handlerHeight = size => {
  switch (size) {
    case "small": {
      return "4vh";
    }
    case "medium": {
      return "6vh";
    }
    default: {
      return "4vh";
    }
  }
};
const handlerWidth = size => {
  switch (size) {
    case "small": {
      return "4vh";
    }
    case "medium": {
      return "6vh";
    }
    default: {
      return "4vh";
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
