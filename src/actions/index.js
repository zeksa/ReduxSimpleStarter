import axios from 'axios'

const API_KEY = '9c241637a62236b813b5fee26bcbc7e9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH WEATHER';

export default function fetchWeather(city) {
    const URL = `${ROOT_URL}&q=${city}`;
    const request = axios.get(URL);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}