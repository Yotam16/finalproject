import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app';


console.log('main.tsx reached');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
