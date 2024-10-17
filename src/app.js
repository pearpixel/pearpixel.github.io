import './app.css'
import './content/pages.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Lsnavbar from './navbar'

import Lsgame from './content/p_game'

const main_element = () => {
    return (
        <div id="main_element">
            <div id="page_divider_base">
            <BrowserRouter>
                <Lsnavbar/>
                <div id="content">
                    <Routes>
                        <Route path="/" element={<h1>HOME</h1>}/>
                        <Route path="/cpp" element={<h1>On Click</h1>}/>
                        <Route path="/game" element={<Lsgame />}/>
                    </Routes>
                </div>
            </BrowserRouter>
            </div>
        </div>
    );
}

export default main_element;

