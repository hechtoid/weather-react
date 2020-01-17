import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
    }
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.forecast.io/forecast/cf20d2bc8131e875da42c2f5f85d7282/37.9164,-122.3481?exclude=[,minutely,flags,]`)
      .then(res => {
        const weather = res.data;
        this.setState({ weather });
      })
  }


  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

}
export default App;
