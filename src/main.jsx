import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/reset.css'
import './index.css'
import { TicketProvider } from './contexts/TicketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TicketProvider>
      <App />
    </TicketProvider>
  </React.StrictMode>
)
