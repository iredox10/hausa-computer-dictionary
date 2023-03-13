import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContext, AuthContextProvider } from './context/AuthContext'
import './index.css'

// const useAuthcontext = useContext(AuthContextProvider)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
)
