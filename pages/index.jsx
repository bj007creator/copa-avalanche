import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  background: #051111;
  width: 100%;
  min-height: 100vh;
  color: white;
`;

function Home() {
  return (
    <Container>
      <GlobalStyle />
      <div>
        Home2
      </div>
    </Container>
  );
}

export default Home;