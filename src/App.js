import React, { useState } from 'react';

import Form from './components/Form';
import Teams from  './components/Teams';

import './App.css';

function App() {
  const [teams, setTeams] = useState([{
    id: 1,
    name: "Elijah Atkins",
    email: "elijah-the-atkins@gmail.com",
    role: "Web UI/React"
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
  return (
    <div className="App">
      <Form addNewTeamMember={addNewTeamMember} />
      <Teams teams={teams}/>
    </div>

  );
}

export default App;
