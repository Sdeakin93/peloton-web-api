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
      value: '',
      error: false
    };
    this.fetchData = this.fetchData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)
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
    {this.state.username 
    ?  <div>
        <img src={imageURL} height="25%" width="25%" alt="your face"/>
        <h1>{this.state.username}'s Peloton info</h1>
        <p>Username: {this.state.username}</p> 
        <p>Location: {this.state.location}</p> 
        <p>Total workouts: {this.state.workouts}</p>
        {this.state.tags && 
        <p>Team: {this.state.tags['primary_name']}</p>
         }
      </div>
    : <p>No account found</p>} 
    {this.state.error && <p>There has been an error</p>}

   
  </div>
 );
}}

export default App;