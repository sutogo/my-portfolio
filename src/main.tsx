import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // 追記
import MorphingMaterial from './components/MorphingMaterial';
import { extend } from '@react-three/fiber';

extend({ MorphingMaterial });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* ↓ ここでAppを囲む */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)