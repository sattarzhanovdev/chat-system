import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'
import './App.css'

const App = () => {
  const username = localStorage.getItem('username')
  const password = localStorage.getItem('password')

  if(!username) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID="e936bb68-e5ff-4176-9f76-9196b463c898"
      userName={username}
      userSecret={password}
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps }/>}
    />
  )
}

export default App;