import React from "react";

class PlanetCard extends React.Componet {
  render() {
    const { planetName, planetImage } = this.props;
    const textoAlternativo = `Planeta ${planetName}`;
    return (
      <div data-testind="planet-card">
        <p data-testind="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ textoAlternativo } />
      </div>
    );
  }
}

export default PlanetCard;
