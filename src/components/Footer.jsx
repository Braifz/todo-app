import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #111;
  color: white;
  display: flex;
  text-align: center;
  justify-content: center;
  height: 50px;
`;

const Footer = () => {
  return (
    <Container>
      <p>
        made by <a href="https://www.github.com/braifz">@Braifz</a>
      </p>
    </Container>
  );
};

export default Footer;
