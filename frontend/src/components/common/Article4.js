import React from 'react';
import Articles from './Articles';
import atmosphere from './Atmosphere.png';

function Article4() {
  // Texte à afficher (le même contenu)
  const texte1 = `
  Les changements climatiques sont la question déterminante de notre époque et nous sommes à un moment décisif. De l’évolution des conditions météorologiques, qui ont des effets sur la production agricole et alimentaire, à l’élévation du niveau des mers, qui augmente les risques d’inondations, les conséquences des changements climatiques sont mondiales en termes d’effets et d’échelle. Sans action immédiate, il sera beaucoup plus difficile et coûteux de s’adapter aux conséquences futures de ces changements.
 `;
 const texte2=`
 L’effet de serre est un phénomène naturel indispensable à la vie humaine et à celle des espèces. Il piège dans une couche de gaz située à basse atmosphère une partie de la réverbération des rayons du soleil sur la Terre, en évitant ainsi que ces rayonnements infrarouges soient renvoyés vers l’espace. Toutefois, après plus d'un siècle et demi d'industrialisation, notamment la déforestation et l'agriculture à grande échelle, les quantités de gaz à effet de serre présentes dans l'atmosphère sont parvenus à des niveaux jamais atteints en trois millions d'années. À mesure que les populations, les économies et les niveaux de vie progressent, le niveau cumulé des émissions de gaz à effet de serre (GES) a lui aussi augmenté.
    `;
  
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
        <p style={titleStyle}>Changements climatiques</p>
        <img src="https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/norwegian_arctic_2015.jpg" alt="Description de l'image" style={{ maxWidth: '100%', margin: '20px 0' }} />
        <p>{texte1}</p>
        <p style={titleStyle}>Les gaz à effet de serre produits par l’activité humaine</p>
        <p>{texte2}</p>
        
        


      </div>
    </div>
  );
}

export default Article4;
