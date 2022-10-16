import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div``;

const WrapperFooter = styled.div`
  width: 100%;
`;

const Main = styled.div`
  margin: 20px;
  min-height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <div>
        <Header />
      </div>
      <Main>{children}</Main>
      <WrapperFooter>
        <Footer />
      </WrapperFooter>
    </Container>
  );
};

export default Layout;
