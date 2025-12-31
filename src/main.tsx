import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App' // Le saqué el .jsx para que TS lo resuelva solo
import './styles/index.css'

// El signo '!' es clave en TypeScript: le asegura que el elemento 'root' existe y no es null
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)