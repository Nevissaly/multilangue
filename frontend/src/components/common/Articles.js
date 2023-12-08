import React, { useState, useEffect } from 'react';
import './Articles.css';
import i18n from '../../i18ne';
import {useTranslation}from 'react-i18next';

import cop28 from './cop28.jpg';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';


const Articles = () => {
  const{t}=useTranslation();
    

    const articles = [
        {
          title: <a href="/Article1" target="_blank" rel="noopener noreferrer">{t('title.menu.title1')}</a>,
          image: img1
        },
        {
          title: <a href="/Article2" target="_blank" rel="noopener noreferrer">{t('title.menu.title2')}</a>,
          image: cop28
        },
        {
          title: <a href="/Article3" target="_blank" rel="noopener noreferrer">{t('title.menu.title3')}</a>,
          image: img2
        },
        {
          title: <a href="/Article4" target="_blank" rel="noopener noreferrer">{t('title.menu.title4')}</a>,
          image:img3
        },
        {
          title: <a href="/Article5" target="_blank" rel="noopener noreferrer">{t('title.menu.title5')}</a>,
          image: img4
        },
        {
          title: <a href="/Article6" target="_blank" rel="noopener noreferrer">{t('title.menu.title6')}</a>,
          image:img5
        },
        // Ajoute d'autres articles si nécessaire
      ];


   

  return (

   
    <div className="background-image">
     <div className="article-container">
      {articles.map((article, index) => (
        <div className="article" key={index}>
          <img src={article.image} alt={`Image de l'article ${index + 1}`} />
          <h2>{article.title}</h2>
          
        </div>
      ))}
    </div>
    </div>
  
  );
};

export default Articles;
