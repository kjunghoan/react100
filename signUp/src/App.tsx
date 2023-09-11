import './App.css'
import { Login } from './Login'
import { Register } from './Register'
import { useState } from 'react'

/**
 * The main component of the SignUp/SignIn component.
 * It manages the state of the current form and renders the selected component.
 * @returns JSX element representing the selected component.
 */
function App() {

  const [currentForm, setCurrentForm] = useState<string>('login');

  return (
    <div className='App'>
      {
        currentForm === 'login' ? <Login setCurrentForm={setCurrentForm} /> : <Register setCurrentForm={setCurrentForm} />
      }
    </div>
  )
}

export default App
