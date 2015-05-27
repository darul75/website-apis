import React from 'react';

if (process.env.BROWSER) {
  require('./_Mentions.scss');
}

export default class Mentions extends React.Component {  
  render() {
    return (
      <div id="mentions">
        <h2>Mentions légales</h2>
    	<p dangerouslySetInnerHTML={{__html: 'Conformément aux dispositions des articles 6-III de la loi n°2004-575 du 21 juin 2004 pour la Confiance dans l\'Economie Numérique, Julien Valéry vous informe des mentions légales suivantes :'}} >
  		</p>
  		<h3>Editeur du site web</h3>
		  <p>
		    Le site web Apis Lazuli Consulting appartient à Julien Valéry, domicilié à :        
		  </p>
  		<p>131 Bld de Charonne 75011 Paris France</p>
		  <h4 dangerouslySetInnerHTML={{__html: 'Immatriculation sous le statut d\'auto-entrepreneur'}}></h4>
  		<p>Numéro de SIRET : 809 647 753 00015</p>
		  <p>Code APE : 6201Z Programmation informatique</p>
		  <h3>Propriété intellectuelle</h3>
		  <p>Le contenu (textes, logo, illustrations, images) dont le site web Apis Lazuli Consulting est composé, est la propriété exclusive de Julien Valéry.</p>
		  <p dangerouslySetInnerHTML={{__html: 'Le logiciel, l\'architecture, la structure technique et les codes sources (HTML, Javascript, CSS), ayant permis la création du site Apis Lazuli Consulting, sont la propriété exclusive de Julien Valéry.'}} ></p>
		  <h4>Hébergeur du site web</h4>  
		  <p dangerouslySetInnerHTML={{__html: 'https://www.heroku.com/'}}></p>
      </div>
    );
  }
};