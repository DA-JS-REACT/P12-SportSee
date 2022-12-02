import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home'
import Profil from '../../Pages/Profil'
import Dashboard from '../../Pages/Dashboard'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/dashboard">
                    <Route path=":userId" element={<Dashboard />} />
                </Route>
                {/* <Route
                    path="/dashboard/:userId"
                    render={(props) => <Dashboard {...props} />}
                /> */}
            </Routes>
        </div>
    )
}

export default App
