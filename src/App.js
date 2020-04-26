import React, { useState } from 'react';

import Form from './components/Form';
import Teams from  './components/Teams';
import data from './components/data'
import './App.scss';

function App() {
  
  const [memberToEdit, setMemberToEdit] = useState([]);
  const [teams, setTeams] = useState([{
    name: data.name,
    email: data.email,
    role: data.role
  }])
  const editTeamMember = member => {
    alert("Can't edit yet");

  }
  const addNewTeamMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeams([...teams, newMember])
  }

  return (
    <div className="App">
      <Form addNewTeamMember={addNewTeamMember} />
      <Teams teams={teams} editTeamMember={editTeamMember}/>
    </div>

  );
}

export default App;
