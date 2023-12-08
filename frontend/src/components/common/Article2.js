import React from 'react';
import Articles from './Articles';
import atmosphere from './Atmosphere.png';
import { useTranslation } from 'react-i18next';

function Article2() {
    const { t } = useTranslation();
  // Texte à afficher (le même contenu)
  const texte1 = t('title.menu.articles.articles2.texte1');
  const texte2 = t('title.menu.articles.articles2.texte2');
  const texte3 = t('title.menu.articles.articles2.texte3');
    
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
        <p style={titleStyle}>{t('title.menu.articles.articles2.para1')}</p>
        <h4>{t('title.menu.articles.articles2.h')}</h4>
        <div style={{ textAlign: 'center' }}>
        <img src="https://img.lemde.fr/2023/11/30/0/0/8174/5449/556/0/75/0/24982b1_69d95ad72de04712b434a916701fb8dc-0-6dffe6837cff450f84621b5a7a1516e5.jpg" alt="Description de l'image" style={{ maxWidth: '100%', margin: '20px 0' }} />
        </div>
        <p>{texte1}</p>
        <p style={titleStyle}>{t('title.menu.articles.articles2.para2')}</p>
        <p>{texte2}</p>
        <p style={titleStyle}>{t('title.menu.articles.articles2.para3')}</p>
        <p>{texte3}</p>

        
      </div>
    </div>
  );
}

export default Article2;
