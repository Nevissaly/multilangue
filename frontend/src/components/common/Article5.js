import React from 'react';
import Articles from './Articles';
import atmosphere from './Atmosphere.png';

function Article5() {
  // Texte à afficher (le même contenu)
  const texte1 = `
   Pénurie d’eau, exode, malnutrition, extinction d’espèces… La vie sur terre telle que nous la connaissons sera inéluctablement transformée par le dérèglement climatique quand les enfants nés en 2021 auront 30 ans, voire plus tôt, alerte un projet de rapport du Groupe d’experts intergouvernemental sur l’évolution du climat (GIEC) de l’Organisation des Nations Unies (ONU), dont le contenu a été dévoilé, mercredi 23 juin, par l’Agence France-Presse. Quel que soit le rythme de réduction des émissions de gaz à effet de serre, les impacts dévastateurs du réchauffement sur la nature et l’humanité qui en dépend vont s’accélérer, assurent des centaines de scientifiques rattachés au GIEC, et devenir douloureusement palpables bien avant 2050. « La vie sur terre peut se remettre d’un changement climatique majeur en évoluant vers de nouvelles espèces et en créant de nouveaux écosystèmes, note le résumé technique de 137 pages. L’humanité ne le peut pas. » `;
 const texte2=`
   Parmi ses conclusions les plus importantes figure un abaissement du seuil au-delà duquel le réchauffement peut être considéré comme acceptable. En signant l’accord de Paris en 2015, le monde s’est engagé à limiter le réchauffement à 2 °C par rapport à l’ère préindustrielle, si possible à 1,5 °C. Désormais, le GIEC estime que dépasser le seuil de 1,5 °C de hausse des températures pourrait déjà entraîner, « progressivement, des conséquences graves, pendant des siècles, et parfois irréversibles ». Et selon l’Organisation météorologique mondiale, la probabilité que ce seuil de 1,5 °C sur une année soit dépassé dès 2025 est déjà de 40 %. « Le pire est à venir, avec des implications sur la vie de nos enfants et nos petits-enfants bien plus que sur la nôtre », affirme le GIEC, alors que la prise de conscience sur la crise climatique n’a jamais été aussi étendue.    `;
 const texte3=`
 Vous pouvez partager un article en cliquant sur les icônes de partage en haut à droite de celui-ci. La reproduction totale ou partielle d’un article, sans l’autorisation écrite et préalable du Monde, est strictement interdite. Pour plus d’informations, consultez nos conditions générales de vente. Pour toute demande d’autorisation, contactez syndication@lemonde.fr. En tant qu’abonné, vous pouvez offrir jusqu’à cinq articles par mois à l’un de vos proches grâce à la fonctionnalité « Offrir un article ». https://www.lemonde.fr/planete/article/2021/06/23/dereglement-climatique-l-humanite-a-l-aube-de-retombees-cataclysmiques-alerte-le-giec_6085284_3244.html Sans oublier les incertitudes autour des « points de bascule », éléments-clés dont la modification substantielle pourrait entraîner le système climatique vers un changement violent et irrémédiable. Au-delà de 2 °C de réchauffement, la fonte des calottes glaciaires du Groenland et de l’Antarctique de l’Ouest (qui contiennent assez d’eau pour provoquer une hausse du niveau de la mer de 13 mètres) pourrait par exemple entraîner un point de non-retour, selon de récents travaux. C’est pour cela que « chaque fraction d’un degré compte », insiste le GIEC, alors qu’un autre point de rupture pourrait voir l’Amazonie – un des poumons de la planète avec les océans – transformée en savane. Face à ces problèmes systémiques, aucun remède miracle unique. En revanche, une seule action peut avoir des effets positifs en cascade. Par exemple, la conservation et la restauration des mangroves et des forêts sous-marines de kelp, qualifiées de puits de « carbone bleu », accroissent le stockage du carbone, mais protègent aussi contre les submersions, tout en fournissant un habitat à de nombreuses espèces et de la nourriture aux populations côtières.   `;
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
        <p style={titleStyle}>Dérèglement climatique : l’humanité à l’aube de retombées cataclysmiques, alerte un projet de rapport du GIEC</p>
        <div style={{ textAlign: 'center' }}>
        <img src="https://img.lemde.fr/2021/06/23/0/0/4007/2694/556/0/75/0/ec87b98_5065169-01-06.jpg" alt="Description de l'image" style={{ maxWidth: '100%', margin: '20px 0' }} />
        </div>
        <p>{texte1}</p>
        <p style={titleStyle}>Risque d’« impacts irréversibles » au-delà du seuil de 1,5 °C</p>
        <p>{texte2}</p>
        <p style={titleStyle}>Des choix radicaux</p>
        <div style={{ textAlign: 'center' }}>
        <img src="https://img.lemde.fr/2021/06/23/0/0/4256/2832/556/0/75/0/4d3fc02_128566143-000-9bv2yg.jpg" alt="Description de l'image" style={{ maxWidth: '100%', margin: '20px 0' }} />
        </div>

        

      </div>
    </div>
  );
}

export default Article5;
