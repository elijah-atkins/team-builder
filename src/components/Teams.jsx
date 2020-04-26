import React from "react";


const Teams = props => {
  const editTeamMember = props.editTeamMember;

  return (
    <div className="team-list">
      {props.teams.map(team => (
        <div className="team" key={team.id}>
          <div className="member-header">
          <h2 className="member-name" >{team.name}</h2>
          <span className="member-edit" onClick={() => 
            editTeamMember()
          }>Edit</span>
          </div>
          <p>{team.email}</p>
          <p>{team.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Teams;