import React from 'react';
import Articles from './Articles';
import atmosphere from './Atmosphere.png';
import { useTranslation } from 'react-i18next';

function Article1() {
  const { t } = useTranslation();
  // Texte à afficher (le même contenu)
  const texte1 = t('title.menu.articles.texte1');
  const texte2 = t('title.menu.articles.texte2');
  const texte3 = t('title.menu.articles.texte3');
  const texte4 = t('title.menu.articles.texte4');
  const texte5 = t('title.menu.articles.texte5');
  const texte6 = t('title.menu.articles.texte6');
  const texte7 = t('title.menu.articles.texte7');
  const texte8 = t('title.menu.articles.texte8')
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
        <p style={titleStyle}>{t('title.menu.articles.paragraphe1')}</p>
        <p>{texte1}</p>

        <hr style={lineStyle} /> {/* Ligne séparatrice */}
        
        <p style={titleStyle}>{t('title.menu.articles.paragraphe2')}</p>
        <p style={titleStyle}>{t('title.menu.articles.paragraphe3')}</p>
        <p>{texte2}</p>
        <img src="https://www.ecologie.gouv.fr/sites/default/files/styles/standard/public/Atmosphere%20effet%20de%20serre.png?itok=jVXVpHhl" alt="Description de l'image" style={{ maxWidth: '100%', margin: '20px 0' }} />
        <hr style={lineStyle} /> {/* Ligne séparatrice */}
        <p style={titleStyle}>{t('title.menu.articles.paragraphe4')}</p>
        <p>{texte3}</p>
        <img src="https://www.ecologie.gouv.fr/sites/default/files/styles/standard/public/types_de_gaz.png?itok=MOrS7ggz" alt="Description de l'image" style={{ maxWidth: '100%', margin: '20px 0' }} />
        <p>{texte4}</p>
        <p>{texte5}</p>
        <p>{texte6}</p>
        <p>{texte7}</p>

        <hr style={lineStyle} /> {/* Ligne séparatrice */}
        
        <p style={titleStyle}>{t('title.menu.articles.paragraphe5')}</p>
        <p>{texte8}</p>

      </div>
    </div>
  );
}

export default Article1;
