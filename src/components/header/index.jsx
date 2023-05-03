import styled from "styled-components";
import { BsCircleFill } from "react-icons/bs";

function Header() {
  return (
    <Top>
      <h1>Menu</h1>
      <Circle size={20} color="red" />
      <h2>User Name</h2>
      <h3>Sales Report</h3>
    </Top>
  );
}

export default Header;

const Top = styled.header`
  width: 100%;
  height: 70px;
  background-color: blue;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 0 20px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    margin-right: 20px;
    margin-left: 10px;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    margin-left: 550px;
  }
`;

export const Circle = styled(BsCircleFill)`
  margin-left: 150px;
`;
