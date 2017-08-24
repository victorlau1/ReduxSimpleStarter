import React, { Component } from 'react';
import { connect } from 'react-redux';
import SparkChart from '../components/sparklines.js';
import GoogleMap from '../components/google_map.js';


class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
            <td><GoogleMap lon={lon} lat={lat}/></td>
            <td><SparkChart data={temps} color="yellow" units="K"/></td>
            <td><SparkChart data={pressure} color="green" units="hPa"/></td>
            <td><SparkChart data={humidity} color="blue" units="%"/></td>
            </tr>
        )
    }


    render() {
        return (
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
            </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return { weather: weather };
}

export default connect(mapStateToProps)(WeatherList);