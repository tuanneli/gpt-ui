import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import '../style/sidebar.scss'
import { useState } from 'react';

const Sidebar = () => {
  const [chats, setChats] = useState<string[]>([])

  const handleAddNewChat = () => {
    setChats(prev => [...prev, "New chat"])
  }

  return (
    <aside className='sidebar'>
      <button onClick={handleAddNewChat} className='new-chat'>
        <AddIcon style={{ marginBottom: '3px' }} />
        New chat
      </button>
      <div className='sidebar_body'>
        {chats.map(chat => {
          return (
            <div className='sidebar_item'>{chat}</div>
          )
        })}
      </div>
      <div className='sidebar_bottom'>
        <div className='sidebar_item'>
          Update to Plus
        </div>
        <div className='sidebar_item'>
          User
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;