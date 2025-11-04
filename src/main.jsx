import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/main.scss'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
<BrowserRouter><App /></BrowserRouter>)
