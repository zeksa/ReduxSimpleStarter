import React, {Component} from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart'

class WeatherList extends Component {

    constructor(props) {
        super(props);

        this.renderWeather = this.renderWeather.bind(this);
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temp</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const press = cityData.list.map(weather => weather.main.pressure);
        const humi = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps}/>
                </td>
                <td>
                    <Chart data={press}/>
                </td>
                <td>
                    <Chart data={humi}/>
                </td>
            </tr>
        )
    }
}

function mapStateToProps(state) {
    return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);