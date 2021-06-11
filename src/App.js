import React, { useState, useEffect } from "react";
import "./App.css";

const gitHubUrl = "https://api.wheretheiss.at/v1/satellites/25544";

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>ISS Location and Velocity:</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">Name: International Space Station(ISS)</h5>
        <h5 className="info-item">Latitude: {userData.latitude}</h5>
        <h5 className="info-item">Longitude: {userData.longitude}</h5>
        <h5 className="info-item">Velocity: {userData.velocity} km/h</h5>
        <h5 className="info-item">Altitude: {userData.altitude}</h5>
        <h5 className="info-item">Visibility: {userData.visibility}</h5>
      </div>
    </div>
  );
}

export default App;
