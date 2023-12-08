// src/components/common/Header.js

import React, { useEffect } from 'react';
import './Header.css';
import {useTranslation} from 'react-i18next'

const Header = () => {
  
  const{t,i18n}=useTranslation()
  const onChanfeLanguage=(e)=>{
      i18n.changeLanguage(e.target.value)
  }
  useEffect(()=>{
    for(let index=0; index< document.getElementsByClassName("langue").length;index++){
      const element=document.getElementsByClassName("langue")[index];
      if(element.value ===i18n.language){
        element.setAttribute("selected",true)
      }
    }
  },[])
  return (
    <header>
     
     <nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="/" className="nav-link">{t("title.menu.home")}</a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="/Articles" className="nav-link">{t("title.menu.article")}</a>
    </li>
  </ul>
  {/* SEARCH FORM */}
  <form className="form-inline ml-3">
    <div className="input-group input-group-sm">
      <input className="form-control form-control-navbar" type="search" placeholder={t("title.menu.placeholder")} aria-label="Search" />

      <div className="input-group-append">
        <button className="btn btn-navbar" type="submit">
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
  </form>
  
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    {/* Messages Dropdown Menu */}
    <label for="langues"> </label>
  <select id="langues" name="langues" onChange={onChanfeLanguage} >
  <option className="langue" value="en">EN</option>
  <option className="langue" value="fr">FR</option>
  <option className="langue" value="ar">AR</option>
  <option className="langue" value="es">ES</option>
  <option className="langue" value="al">AL</option>
  <option className="langue" value="ch">CH</option>
</select>

      
    {/* Notifications Dropdown Menu */}
   
  </ul>
</nav>
{/* /.navbar */}

    </header>
  );
};

export default Header;
