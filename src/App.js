import React, { Component } from 'react';
import axios from 'axios';
import './styles.css';
import pelotonlogo from './images/peloton-logo.png';

class App extends Component {
  state = {
    data: null
  }

  fetchData = () => {
    axios.get('https://api.onepeloton.com/api/user/sjarquedeakin', {
      headers: {"accept": "*/*"}}
    )
    .then(function(response) {
      console.log('YOU DID IT GIRL');
    })
    .catch(function(error) {
      console.log('Error on Authentication');
    });
  }

  render(){
  
 

 return (
  <div className="App">
      <div className="logo">
        <img src={pelotonlogo} height= "50%" width="50%" alt="logo" />
      </div>
    <h1>Sarah's Peloton API</h1>

    <div>
        <button className="fetch-button" onClick={this.fetchData}>
          Fetch Last Type Of Workout
        </button>
        <br />
      </div>
  </div>
 );
}}

export default App;