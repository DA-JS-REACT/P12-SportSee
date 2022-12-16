import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home'
import Profil from '../../Pages/Profil'
import Dashboard from '../../Pages/Dashboard'
import Error from '../Error'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/profil" element={<Profil />} /> */}
                <Route path="/profil">
                    <Route path=":userId" element={<Profil />} />
                </Route>
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Error page={true} />} />
                <Route path="/dashboard">
                    <Route path=":userId" element={<Dashboard />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
