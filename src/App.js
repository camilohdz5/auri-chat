import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './Components/ChatFeed'
import LoginForm from './Components/LoginForm'
import './App.css'

function App() {

  if(!localStorage.getItem('chat-username')) return <LoginForm/>

  return <ChatEngine
    height='100vh'
    projectID='3e993f5f-47e3-4946-ae8e-c8558411d266'
    userName={localStorage.getItem('chat-username')}
    userSecret={localStorage.getItem('chat-password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
  />
}

export default App
