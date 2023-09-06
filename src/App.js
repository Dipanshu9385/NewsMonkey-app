
import './App.css';
import React, { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>

        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<News pageSize={11} country={'in'} category={'general'} />} />
          </Routes>
          <Routes>
            <Route path='/Sports' element={<News pageSize={11} country={'in'} category={'Sports'} />} />
          </Routes>
          <Routes>
            <Route path='/Business' element={<News pageSize={11} country={'in'} category={'Business'} />} />
          </Routes>
          <Routes>
            <Route path='/Health' element={<News pageSize={11} country={'in'} category={'Health'} />} />
          </Routes>
          <Routes>
            <Route path='/Science' element={<News pageSize={11} country={'in'} category={'Science'} />} />
          </Routes>
          <Routes>
            <Route path='/technology' element={<News pageSize={11} country={'in'} category={'technology'} />} />
          </Routes>
          <Routes>
            <Route path='/Entertainment' element={<News pageSize={11} country={'in'} category={'Entertainment'} />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}




