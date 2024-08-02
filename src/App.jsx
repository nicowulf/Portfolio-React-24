import './App.css'
import { useUser } from './context/UserContext'

function App() {
  const { userData, updateUser, welcome } = useUser(); 

  return (
    <>
      <div></div>  
    </>
  )
}

export default App
