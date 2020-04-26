import React, { useState } from "react";

const TeamForm = ({ addNewTeamMember }) => {

  const [team, setTeam] = useState({ name: "", email: "", role: ""});
  // This uses https://reactjs.org/docs/events.html#form-events
  const handleChanges = event => {

    setTeam({ ...team, [event.target.name]: event.target.value });

  };


  const submitForm = event => {
    event.preventDefault();
    addNewTeamMember(team);
    setTeam({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>

      <label htmlFor="name">Name</label>

      <input
        id="name"
        type="text"
        placeholder="Enter Name"
        value={team.name}
        name="name"
        onChange={handleChanges}
      />
      <label htmlFor="email">E-mail</label>

      <input
        id="email"
        type="text"
        placeholder="Enter E-mail"
        value={team.email}
        name="email"
        onChange={handleChanges}
      />      <label htmlFor="role">Role</label>

      <input
        id="role"
        type="text"
        placeholder="Enter Role"
        value={team.role}
        name="role"
        onChange={handleChanges}
      />
      <button>Add Team Member</button>
    </form>
  );
};

export default TeamForm;
