import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { defaultData } from "./backup";
import "react-toggle/style.css";

// Components
import { WorkoutList } from "./workouts";

const me = "sjarquedeakin";

export const UsernameContext = React.createContext();

function App() {
  const [data, setData] = useState(defaultData);
  const [username, setUsername] = useState(me);
  const [search, setSearch] = useState(me);
  // const [showText, setShowText] = useState(false);

  
  useEffect(() => {
    const fetchData = async () => {
      
      const result = await axios(
        `http://cors-anywhere.herokuapp.com/https://api.onepeloton.com/api/user/${username}`
      );
      setData(result.data);
      console.log(result);
    };
    fetchData();
  }, [search]);

  const clearVal = () => setUsername("");

  if (!data.username) {
    return <h2>API Error</h2>;
  } 

  return (
    <div className="App">
      <UsernameContext.Provider value={me}>
        <h1>Peloton API tool</h1>
        
      {/* <DarkToggle /> */}
        {/* <div className="logo">
        <img src={pelotonlogo} height="50%" width="50%" alt="Peloton logo" />
      </div> */}
        <input
          className="username-form"
          type="text"
          placeholder="enter username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <button type="button" onClick={() => setSearch(username)}>
          Submit
        </button>

        <button type="button" onClick={() => clearVal()}>
          Clear
        </button>
        {/* <button onClick={() => setShowText(!showText)}>Show Results</button> */}
        {/* {showText && <div> */}
            <h1>{data?.username}</h1>
            <img src={data?.image_url} height="25%" width="25%" alt="your face" />
            <p>Location: {data?.location}</p>
            <p>Total workouts: {data?.total_workouts}</p>
            <p>Total followers: {data?.total_followers}</p>
            <p>Total following: {data?.total_following}</p>
            <p>Team Name: {data?.tags_info?.primary_name}</p>
            <WorkoutList workouts={data?.workout_counts} />
        {/* </div>} */}
      </UsernameContext.Provider>
    </div>
  );
}

export default App;
