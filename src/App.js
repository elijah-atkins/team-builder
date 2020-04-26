import React, { useState } from 'react';

import Form from './components/Form';
import Teams from  './components/Teams';
import data from './components/data'
import './App.scss';

function App() {
  console.log({ data });
  const [memberToEdit, setMemberToEdit] = useState([]);
  const [teams, setTeams] = useState([{
    name: data.name,
    email: data.email,
    role: data.role
  }])
  const addNewTeamMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeams([...teams, newMember])
  }
  const editMember = member => {
    console.log(member)
  }
  return (
    <div className="App">
      <Form addNewTeamMember={addNewTeamMember} editMember={editMember}/>
      <Teams teams={teams}/>
    </div>

  );
}

export default App;
