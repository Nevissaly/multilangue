// src/components/Home.js

import React,  { useState,useEffect }from 'react';
import './Home.css';
import { useTranslation } from 'react-i18next';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';



const Home = () => {
  const [open, setOpen] = useState(false);
  const [userSolution, setUserSolution] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    if (!userSolution.trim()) {
      setError(true);
    } else {
      setSubmitted(true);
      setOpen(false);
    }
  }; // Nouvel état pour suivre les erreurs
  const { t } = useTranslation();

  
  const images = [
  
    // Ajoutez autant d'images que nécessaire
  ];
  
  return (
    <div className="App">
    <header className="App-header">
      <h1> {t('title.menu.articles.articles2.articles3.home1.hm1')}</h1>
    </header>
    
    <div className="solutions-container">
    <section className="sensibilisation-section">
      <h1>{t('title.menu.articles.articles2.articles3.home1.hm2')}</h1>
      <p>
      {t('title.menu.articles.articles2.articles3.home1.hm3')}
      </p>
    </section>
    <section className="idees-section">
      <h1>{t('title.menu.articles.articles2.articles3.home1.hm4')}</h1>
      <p>
      {t('title.menu.articles.articles2.articles3.home1.hm5')}
      </p>
      <Button variant="contained" onClick={handleOpen}>
      {t('title.menu.articles.articles2.articles3.home1.hm6')}
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{t('title.menu.articles.articles2.articles3.home1.hm7')}</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              value={userSolution}
              onChange={(e) => setUserSolution(e.target.value)}
              placeholder={t('title.menu.articles.articles2.articles3.home1.hm8')}
            />
            {error && <p className="error-message">{t('title.menu.articles.articles2.articles3.home1.hm9')}</p>}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>{t('title.menu.articles.articles2.articles3.home1.hm10')}</Button>
            <Button onClick={handleSubmit}>{t('title.menu.articles.articles2.articles3.home1.hm11')}</Button>
          </DialogActions>
        </Dialog>
        {submitted && <p className="green-text">{t('title.menu.articles.articles2.articles3.home1.hm12')}</p>}
    </section>
    </div>
   
  </div>
  
  );
};

export default Home;
