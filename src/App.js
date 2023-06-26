import React, { useState } from 'react';
import Navbar from './Navbar';
import './App.css';
import Home from './Home.js';
import PersonalInformation from './PersonalInformation';
import IdealJob from './IdealJob';
import PersonalProfile from './PersonalProfile'
import ProjectIdea from './ProjectIdea';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'personalInformation':
        return <PersonalInformation />;
      case 'idealJob':
        return <IdealJob />;
      case 'personalProfile':
        return <PersonalProfile />;
      case 'projectIdea' :
        return <ProjectIdea />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar setActivePage={setActivePage}/>
      {renderPage()}
    </div>
  );
}

export default App;
