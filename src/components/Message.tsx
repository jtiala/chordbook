import styled from "styled-components";

interface IProps {
  variant?: string;
}

const Message = styled.div<IProps>`
  padding: 10px;
  margin: 10px auto;
  background-color: ${props => {
    switch (props.variant) {
      case "error":
        return "red";
      case "success":
        return "green";
      case "danger":
        return "orange";
      default:
        return "whitesmoke";
    }
  }};
  color: ${props => {
    switch (props.variant) {
      case "error":
      case "success":
      case "danger":
        return "white";
      default:
        return "black";
    }
  }};
  max-width: 480px;
  box-sizing: border-box;
`;

export default Message;
