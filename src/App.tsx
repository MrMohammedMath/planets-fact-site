import './scss/app.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Tabs from './components/Tabs';
import Layout from './components/Layout';
import Details from './components/Details';

// export const host = "http://192.168.1.110:3000/";
export const host = `${window.location.protocol}//${window.location.host}/`;



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Navigate to="earth" />} />
                    <Route path=":planet" element={<Tabs />} >
                        <Route index element={<Details />} />
                        <Route path=":tab" element={<Details />} />
                    </Route>
                    <Route path='undefined' element={<Navigate to='earth' />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}