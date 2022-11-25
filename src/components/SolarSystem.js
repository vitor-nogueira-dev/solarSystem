import React from "react";
import PlanetCard from "./PlanetCard";
import planets from '../data/planets.js'
import Title from "./Title";

class SolarSystem extends React.Component {
  render() {
    return <div data-testind="solar-system">
    <Title headline="Planetas"/>
    {
          planets
            .map(({ name, image }) => 
    <PlanetCard 
        key={ name } 
        planetName={ name } 
        planetImage={ image } 
    />)
    }
    </div>;
  }
}

export default SolarSystem;

