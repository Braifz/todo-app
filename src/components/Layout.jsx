import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  min-height: 100vh;
`;

const WrapperFooter = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
`;

const Main = styled.div`
  margin: 20px;
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
