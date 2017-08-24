import React, { Component } from 'react';
import SearchBar from '../container/search-bar.js';
import WeatherList from '../container/weatherlist.js';

export default class App extends Component {
  render() {
    return (
      <div>
      <SearchBar/>
      <WeatherList/>
      </div>
    );
  }
}
