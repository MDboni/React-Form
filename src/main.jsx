import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'milligram/dist/milligram.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
