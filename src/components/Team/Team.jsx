import React from "react";
import TeamPill from "./TeamPill/TeamPill";
import daniel from "../../assets/Ellipse 15.png";
import sanfole from "../../assets/Ellipse 16.png";
import nik from "../../assets/Ellipse 15 (1).png";
import haldone from "../../assets/Ellipse 15 (2).png";
import colleen from "../../assets/Ellipse 15 (3).png";
import cesforila from "../../assets/Ellipse 15 (4).png";
import styles from "./Team.module.css";

const Team = () => {
  const teamMembers = [
    {
      name: "Danial Def",
      case: "301 Cases",
      image: daniel,
    },
    {
      name: "Sanfole",
      case: "850 Cases",
      image: sanfole,
    },
    {
      name: "Cesforila",
      case: "470 Cases",
      image: cesforila,
    },
    {
      name: "Colleen",
      case: "180 Cases",
      image: colleen,
    },
    {
      name: "Haldone",
      case: "212 Cases",
      image: haldone,
    },
    {
      name: "Nik Jeo",
      case: "350 Cases",
      image: nik,
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Our Team</div>
      <div className={styles.pills}>
        {teamMembers.map((member, i) => (
          <TeamPill
            person={member.image}
            name={member.name}
            cases={member.case}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;