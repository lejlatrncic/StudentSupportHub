import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AdminLogin from './components/admin/AdminLogin';
import AdminPanel from './components/admin/AdminPanel';
import Home from './pages/forum/Home';
import PostDetail from './pages/forum/PostDetail';
import Contact from './pages/contact/Contact';
import 'font-awesome/css/font-awesome.min.css';

function App() {
    const [admin, setAdmin] = useState(null);

    const handleLoginSuccess = (user) => {
        setAdmin(user);
    };

    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    {/* Ruta za prijavu admina */}
                    <Route
                        path="/admin/admin-login"
                        element={<AdminLogin onLoginSuccess={handleLoginSuccess} />}
                    />

                    {/* Ruta za admin panel */}
                    <Route
                        path="/admin/admin-panel"
                        element={admin ? <AdminPanel /> : <p>Access Denied. Please log in as admin.</p>}
                    />
                    //Forum
                    {/*<Route path="/forum" element={<Home />} />*/}
                    <Route path="/post/:id" element={<PostDetail />} />
                    //Contact
                    <Route path="/contact" element={<Contact />} />
                    {/* Početna stranica */}
                    <Route
                        path="/"
                        element={<Home />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;