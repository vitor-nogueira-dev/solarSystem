import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from './data/planets';
import './css/SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <section className="content">
        <Title headline="PLANETAS" />
        <div data-testid="solar-system" className="content-solarSystem">
          {
            planets
              .map(({ name, image }) => (
                <PlanetCard
                  key={ name }
                  planetName={ name }
                  planetImage={ image }
                />))
          }
        </div>
      </section>
    );
  }
}

export default SolarSystem;
