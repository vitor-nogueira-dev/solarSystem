import React from 'react';
import PropTypes from 'prop-types';
import './css/MissionCard.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <section className="content-missions">
        <div data-testid="mission-card" className="mission-card">
          <div className="name">
            <p data-testid="mission-name">
              {' '}
              🪐
              {name}
            </p>
          </div>
          <div className="year-country">
            <p data-testid="mission-year">
              🗓
              {year}
            </p>
            <p data-testid="mission-country">
              📍
              {country}
            </p>
          </div>
          <p
            data-testid="mission-destination"
            className="destination"
          >
            🏳️
            {destination}

          </p>
        </div>
      </section>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;

export default MissionCard;
