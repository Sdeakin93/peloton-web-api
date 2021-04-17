import "./styles.css";
import React, { useState, useReducer } from "react";
import axios from "axios";
import "react-toggle/style.css";
import pelotonlogo from "./images/peloton-logo.png";

// Components
import { WorkoutList } from "./workouts";


export const UsernameContext = React.createContext();

const initialState = { data: {} };

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case 'storeData' : 
    return {data: action.data || {}} 
    case 'clearData' : 
    return {data: {}} 
    default:
      return state;
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [username, setUsername] = useState('');
 
  const fetchData = async () => { 
    const result = await axios(
      `https://rocky-refuge-28597.herokuapp.com/https://api.onepeloton.com/api/user/${username}`
    );
    dispatch({type: 'storeData', data: result.data}) 
  };

  function clearAll() {
    setUsername('');
    dispatch({type: 'clearData'})
  }

  const {data} = state; 

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
            <button disabled={!username} type="submit" onClick={() => fetchData()}>
            Submit
          </button>
          <button type="submit" onClick={() => clearAll()}>
            Clear
          </button>
        </div>
        {data.username && <div className="results">
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
