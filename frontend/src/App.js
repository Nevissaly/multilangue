// src/components/App.js

import React,{Component, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/Home';
import Articles from './components/common/Articles';
import Article1 from './components/common/Article1';
import Article2 from './components/common/Article2';
import Article3 from './components/common/Article3';
import Article4 from './components/common/Article4';
import Article5 from './components/common/Article5';
import Article6 from './components/common/Article6';

function App() {
  const [currentForm, setCurrentForm]=useState('login');

  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }
  
  return (

    <Router>
      <div className="app-container">
      
        
        <div className="main-content">
          <Header />
          <div className="content-container">
            <Routes>
         
              <Route path="/" element={<Home />} />
              <Route path="/Article1" element={<Article1 />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/Article2" element={<Article2 />} />
              <Route path="/Article3" element={<Article3 />} />
              <Route path="/Article4" element={<Article4 />} />
              <Route path="/Article5" element={<Article5 />} />
              <Route path="/Article6" element={<Article6 />} />
              
              {/* Ajoutez d'autres routes ici */}
            </Routes>
            
            

          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
