import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './screens/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import Header from './components/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
