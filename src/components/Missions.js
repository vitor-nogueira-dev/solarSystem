import React from "react";
import Title from "./Title";
import missions from "../data/missions";
import MissionCard from "./MissionCard";

class Missions extends React.Component {
  render() {
    return (
      <div data-testind="missions">
        <Title headline="Missões" />
        {missions.map((missao) => (
          <MissionCard key={missao.name} props={missao} />
        ))}
      </div>
    );
  }
}

export default Missions;
