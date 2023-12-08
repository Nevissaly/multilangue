import React from 'react';
import Articles from './Articles';
import atmosphere from './Atmosphere.png';
import { useTranslation } from 'react-i18next';

function Article3() {
  // Texte à afficher (le même contenu)
  const { t } = useTranslation();
  const texte1 = t('title.menu.articles.articles2.articles3.texte1');
  const texte2 = t('title.menu.articles.articles2.articles3.texte2');
  const texte3 = t('title.menu.articles.articles2.articles3.texte3');
    
    const titleStyle = {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column', // Pour organiser les éléments verticalement
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'justify',
    maxWidth: '800px', // Ajout d'une largeur maximale au contenu
    margin: '0 auto', // Pour centrer le contenu horizontalement
  };

  const lineStyle = {
    width: '100%',
    borderBottom: '1px solid #ccc',
    margin: '20px 0', // Espace avant et après la ligne séparatrice
  };

  return (
    <div style={contentStyle}>
      <div>
        <p style={titleStyle}>{t('title.menu.articles.articles2.articles3.p1')}</p>
        <img src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/06-08-2021_Unsplash_Iceland.jpg/image1170x530cropped.jpg" alt="Description de l'image" style={{ maxWidth: '100%', margin: '20px 0' }} />
        <p>{texte1}</p>
        <p style={titleStyle}>{t('title.menu.articles.articles2.articles3.p2')}</p>
        <p>{texte2}</p>
        <p style={titleStyle}>{t('title.menu.articles.articles2.articles3.p3')}</p>
        <p>{texte3}</p>
        


      </div>
    </div>
  );
}

export default Article3;
