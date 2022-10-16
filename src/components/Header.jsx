import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: #111;
  color: white;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  border-bottom: 1px solid white;
`;

const Header = () => {
  return (
    <Wrapper>
      <Title>Todo App</Title>
    </Wrapper>
  );
};

export default Header;
