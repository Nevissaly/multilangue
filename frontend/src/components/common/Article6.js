import React from 'react';
import Articles from './Articles';
import atmosphere from './Atmosphere.png';

function Article6() {
  // Texte à afficher (le même contenu)
  const texte1 = `
  Réagissant aux dernières conclusions du Groupe intergouvernemental d'experts sur l'évolution du climat (GIEC), le Secrétaire général de l'ONU a insisté sur le fait qu'à moins que les gouvernements du monde entier ne réévaluent leurs politiques énergétiques, le monde sera inhabitable. Ses commentaires reflètent l'insistance du GIEC sur le fait que tous les pays doivent réduire considérablement leur utilisation de combustibles fossiles, étendre l'accès à l'électricité, améliorer l'efficacité énergétique et accroître l'utilisation de combustibles alternatifs, tels que l'hydrogène.`;
   const texte2=`
   À moins que des mesures ne soient prises rapidement, certaines grandes villes seront sous les eaux, a déclaré M. Guterres dans un message vidéo. Il a mis en garde également contre « des vagues de chaleur sans précédent, des tempêtes terrifiantes, des pénuries d'eau généralisées et l'extinction d'un million d'espèces de plantes et d'animaux ». « Ce n'est ni une fiction ni une exagération. C'est ce qui résultera de nos politiques énergétiques actuelles, nous dit la science. Nous sommes sur la voie d'un réchauffement climatique de plus du double de la limite de 1,5 degré (Celsius) » qui a été convenue à Paris en 2015, a ajouté le chef de l'ONU. Fournissant la preuve scientifique pour étayer cette évaluation accablante, le rapport du GIEC - rédigé par des centaines d'éminents scientifiques et approuvé par 195 pays - note que les émissions de gaz à effet de serre générées par l'activité humaine ont augmenté depuis 2010 « dans tous les principaux secteurs du monde ». const texte3=`
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
        <p style={titleStyle}>Climat : c'est « maintenant ou jamais » qu'il faut limiter le réchauffement à 1,5 degré, selon le GIEC</p>
        <div style={{ textAlign: 'center' }}>
        <img src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/04-04-2022_UNICEF_Somalia.jpg/image1170x530cropped.jpg" alt="Description de l'image" style={{ maxWidth: '100%', margin: '20px 0' }} />
        </div>
        <p>{texte1}</p>
        <div style={{ textAlign: 'center' }}>
        <img src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/04-04-2022_UNICEF_South-Sudan-0.jpg/image1170x530cropped.jpg" alt="Description de l'image" style={{ maxWidth: '100%', margin: '20px 0' }} />
        </div>
        <h4>Ni fiction, ni exagération</h4>
        <p>{texte2}</p>
        


        

      </div>
    </div>
  );
}

export default Article6;
