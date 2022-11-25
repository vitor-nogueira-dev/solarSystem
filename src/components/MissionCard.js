import React from "react";

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testind="mission-card">
        <p data-testind="mission-name">{name}</p>
        <p data-testind="mission-year">{year}</p>
        <p data-testind="mission-country">{country}</p>
        <p data-testind="mission-destination">{destination}</p>
      </div>
    );
  }
}

export default MissionCard