import React from 'react';
import PropTypes from 'prop-types';
import './css/PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const textoAlternativo = `Planeta ${planetName}`;
    return (
      <div
        data-testid="planet-card"
        className="planetas"
      >
        <img src={ planetImage } alt={ textoAlternativo } className="d-block w-100" />
        <p
          data-testid="planet-name"
          className="titulo"
        >
          {planetName}
          {' '}

        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
}.isRequired;

export default PlanetCard;
