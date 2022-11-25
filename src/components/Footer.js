import React from 'react';
import RedesSociais from './RedesSociais';
import './css/Footer.css';

const redesSociais = {
  instagram: 'https://www.instagram.com/vitorleonel.br/',
  facebook: 'https://www.facebook.com/vitor.leonel.9406/',
  linkedin: 'https://www.linkedin.com/in/vitor-noqueira-913a9284/',
  email: 'vleonel96@gmail.com',
  gitHub: 'https://github.com/vitor-nogueira96',
};

class Footer extends React.Component {
  render() {
    return (
      <p>
        <RedesSociais redesSociais={ redesSociais } />
      </p>
    );
  }
}

export default Footer;
