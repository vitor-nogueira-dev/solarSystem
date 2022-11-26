import React from 'react';
import PropTypes from 'prop-types';

class RedesSociais extends React.Component {
  render() {
    const { redesSociais } = this.props;
    const { instagram, facebook, linkedin, email, gitHub } = redesSociais;
    return (
      <section className="section-redesSociais">
        <section className="redesSociais">
          <a href={ instagram } target="_blank" rel="noreferrer">
            Instagram
          </a>

          <a href={ linkedin } target="_blank" rel="noreferrer">
            Linkedin
          </a>

          <a href={ gitHub } target="_blank" rel="noreferrer">
            GitHub
          </a>
        </section>
        <p className="contato">
          📧 contato -&gt;
          {' '}
          {email}
        </p>
      </section>
    );
  }
}

RedesSociais.propTypes = {
  redesSociais: {
    instagram: PropTypes.string,
    facebook: PropTypes.string,
    linkedin: PropTypes.string,
    email: PropTypes.string,
    gitHub: PropTypes.string,
  },
}.isRequired;

export default RedesSociais;
