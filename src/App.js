import React, { Component } from 'react';
import axios from 'axios';
import './styles.css';
import pelotonlogo from './images/peloton-logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', 
      tags: {},
      location: '',
      workouts: '',
      workoutcount: {},
      imageURL: {},
      streaks: {},
      value: '',
      error: false
    };
    this.fetchData = this.fetchData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    }) 
  }

  fetchData(event) {
    event.preventDefault()
    let myUsername = this.state.value;
    
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.onepeloton.com/api/user/${myUsername}`
    )
    .then (response => {
      console.log(response);
      this.setState({
        username: response.data.username,
        tags: response.data.tags_info,
        location: response.data.location,
        workouts: response.data.total_non_pedaling_metric_workouts,
        imageURL: response.data.image_url,
        workoutcounts: response.data.workout_counts,
        streaks: response.data.streaks,
        error: false
      });
    })
    .catch (error => {
      this.setState({
        error: true
      })
    });
  }

  render(){

    const { imageURL } = this.state;
    const Peloton = this.state;
  

 return (
  <div className="App">
    <div className="logo">
      <img src={pelotonlogo} height= "50%" width="50%" alt="lonpm go" />
    </div>
    <form onSubmit={this.fetchData} >
      <label htmlFor="username">
        Write username 
      </label>
      <input id="username" value={this.state.value} type="text" onChange={this.handleChange} className="username-form"/>
      <button type="submit" className="fetch-button"> Submit </button>
    </form>
    {Peloton.username 
    ?  <div>
        <img src={imageURL} height="25%" width="25%" alt="your face"/>
        <h1>{Peloton.username}'s Peloton info</h1>
        <p>Username: {Peloton.username}</p> 
        <p>Location: {Peloton.location}</p> 
        <p>Total workouts: {Peloton.workouts}</p>
        <p>Current weekly streak: {Peloton.streaks['current_weekly']}</p>
        <p>Best weekly streak: {Peloton.streaks['best_weekly']}</p>
        {Peloton.tags && 
        <p>Tags: {Peloton.tags['primary_name']}</p>
         }
         {/* <p>Workout counts</p>
         This is the section where I will add in all of the arrays from workout count, I will pull through the icon, the count, and the name from the array.*/}
      </div>
    : <p>No account found</p>} 
    {this.state.error && <p>There has been an error</p>}

   
  </div>
 );
}}

export default App;