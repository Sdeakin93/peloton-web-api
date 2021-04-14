import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { defaultData } from "./backup";
import "react-toggle/style.css";
import pelotonlogo from "./images/peloton-logo.png";

// Components
import { WorkoutList } from "./workouts";

// const me = "sjarquedeakin";

export const UsernameContext = React.createContext();

function App() {
  const [data, setData] = useState('');
  const [username, setUsername] = useState('');
  const [search, setSearch] = useState('');
  const [showText, setShowText] = useState(false);

  
  useEffect(() => {
    const fetchData = async () => {
      
      const result = await axios(
        `https://rocky-refuge-28597.herokuapp.com/https://api.onepeloton.com/api/user/${username}`
      );
      setData(result.data);
      console.log(result);
      setShowText(true);
    };
    fetchData();
  }, [search]);

  function clearAll() {
    setShowText(false);
    setUsername('');
  }

  // if (!data.username) {
  //   return <h2>API Error</h2>;
  // } 

  return (
    <div className="App">
      {/* <UsernameContext.Provider value={me}> */}
        <h1>Peloton API tool</h1>
        <div className="logo">
        <img src={pelotonlogo} height="50%" width="50%" alt="Peloton logo" />
      </div>
        <input
          className="username-form"
          type="text"
          placeholder="enter username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <div className="buttons">
            <button type="buttons__select" onClick={() => setSearch(username)}>
            Submit
          </button>
          <button type="buttons__select" onClick={() => clearAll()}>
            Clear
          </button>
        </div>
        {showText && <div className="results">
            <h1>{data?.username}</h1>
            <img src={data?.image_url} height="25%" width="25%" alt="your face" />
            <p>Location: {data?.location}</p>
            <p>Total workouts: {data?.total_workouts}</p>
            <p>Total followers: {data?.total_followers}</p>
            <p>Total following: {data?.total_following}</p>
            <p>Team Name: {data?.tags_info?.primary_name}</p>
            <WorkoutList workouts={data?.workout_counts} />
        </div>}
      {/* </UsernameContext.Provider> */}
    </div>
  );
}

export default App;
