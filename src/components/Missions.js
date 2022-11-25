import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from './data/missions';

class Missions extends React.Component {
  render() {
    return (
      <section className="section-missions">
        <Title headline="MISSÕES" />
        <div data-testid="missions" className="missions">
          {missions.map((missao) => (
            <MissionCard
              key={ missao.name }
              name={ missao.name }
              year={ missao.year }
              country={ missao.country }
              destination={ missao.destination }
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Missions;
