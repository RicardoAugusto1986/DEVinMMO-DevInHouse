import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Home} from './pages/Home';
import { PageList } from './pages/pageList';
import {PageDescrition} from './pages/pageDescrition';
import { PageNotice } from './pages/pageNotice';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import { GameContext } from './component/context/contextGame';



ReactDOM.render(
  <React.StrictMode>
  <GameContext> 
  <BrowserRouter>
   <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/listGames'element={<PageList/>}/>
    <Route path='/listGames/:id'element={<PageDescrition/>}/>
    <Route path='/Notice'element={<PageNotice/>}/>
   </Routes> 
  </BrowserRouter>
 </GameContext>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
