import styled from "styled-components";
import Theme from "../../styles/Theme";

const getSize = ({ size }) => {
  switch (size) {
    case "small": {
      return "70px";
    }
    case "medium": {
      return "80px";
    }
    case "large": {
      return "90px";
    }
    default: {
      return "70px";
    }
  }
};

const getColor = ({ color }) => {
  switch (color) {
    case "active": {
      return Theme.activeColor;
    }
    case "inActive": {
      return Theme.inActiveColor;
    }
  }
};

const Button = styled.button`
  width: ${props => getSize(props.size)};
  height: 30px;
  color: white;
  border-radius: ${props => (props.borderRadius ? props.borderRadius : "null")};
  border: white;
  outline: 0;
`;

export default Button;
