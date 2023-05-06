import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";


const Wrapper = styled.nav`
  width: 260px;
  height: 100vh;
  padding: 8px;
  border-color: hsla(0,0%,100%,.2);
  background-color: rgba(32,33,35, 0.9);
  display: felx;
  flex-directoin: column;
`;

const NewChat = styled.div`
  width: 100%;
  height: 46px;
  padding: 0.75rem;
  padding-top: 1rem;
  border: 1px solid hsla(0,0%,100%,.2);
  border-radius: 0.375rem;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  cursor: pointer;
  transition-duration: .2s;
  line-height: 1.25rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const linkStyle = {
  textDecoration: "none"
}

const Sidebar = () => {
  return (
    <Wrapper>
      <Link to={'/#todo new chat'} style={linkStyle}>
        <NewChat>
          <AddIcon style={{ marginBottom: '3px' }} />
          New chat
        </NewChat>
      </Link>
    </Wrapper>
  );
}

export default Sidebar;