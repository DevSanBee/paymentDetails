import styled from "styled-components";

const Button = styled.button`
  background-color:#3f67e9;
  color: white;
  border: none;
  padding: ${(props) => (props.padding ? props.padding : "8px")};
  border-radius: 5px;
  font-size: 22px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 125, 255, 0.8);
    color: white;
  }
`;
export default Button;
