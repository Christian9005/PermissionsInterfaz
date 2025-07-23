import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CreatePermissionPage from "./components/pages/CreatePermissionPage/CreatePermissionPage";
import ListPermissionsPage from "./components/pages/ListPermissionsPage/ListPermissionsPage";
import EditPermissionPage from "./components/pages/EditPermissionPage/EditPermissionPage";
import Navbar from "./components/molecules/Navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ListPermissionsPage/>}/>
                <Route path="/permissions/create" element={<CreatePermissionPage/>}/>
                <Route path="/permissions/edit/:id" element={<EditPermissionPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
