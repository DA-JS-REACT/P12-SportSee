import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Header from '../header'
import LayoutVerical from '../LayoutVertical'

function App() {
    return (
        <div className="App">
            <Header />
            <section className="container">
                <LayoutVerical />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </section>
        </div>
    )
}

export default App
