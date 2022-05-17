import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: #111;
  color: white;
  margin: 0;
  padding: 0;
  height: 70px;
  display: flex;
  text-align: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <Wrapper>
      <h2>Todo App</h2>
    </Wrapper>
  );
};

export default Header;
