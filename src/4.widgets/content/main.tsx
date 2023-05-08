import { KeyboardEventHandler, useState } from 'react';
import '../style/main.scss'
import SendOutlined from '@mui/icons-material/SendOutlined';

const Main = () => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<string[]>([])

  const handleSearch = () => {
    if (value.trim()) {
      setMessages(prev => [...prev, value])
      setValue('')
    }
  }

  console.log(1, value);


  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <main className="main">
      <div className='main_body'>
        {!messages.length &&
          <h1 className='main_title'>
            ChatGPT RU
          </h1>
        }
        {messages.map(message => {
          return (
            <div className='message-box'>
              <div className='message-box_logo'>
                U
              </div>
              <div className='message-box_text'>
                {message}
              </div>
            </div>
          )
        })}
      </div>
      <div className='main_bottom'>
        <div className='main_input_box'>
          <textarea
            onKeyDown={handleKeyDown}
            value={value.replace('\n', '')}
            onChange={e => setValue(e.target.value)}
            className='main_input'
            placeholder='Send a message.' />
          <i onClick={handleSearch} className="main_input__search"><SendOutlined /></i>
        </div>
      </div>
    </main>
  );
}

export default Main;