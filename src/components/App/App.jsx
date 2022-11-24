import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Header from '../header'

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
