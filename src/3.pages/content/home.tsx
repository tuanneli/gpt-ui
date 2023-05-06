import Main from "../../4.widgets/content/main";
import Sidebar from "../../4.widgets/content/sidebar";
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: felx;
`;

const Home = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Main />
    </Wrapper>
  );
}

export default Home;