import transformForecast from '../services/transformForecast';
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const setCity = payload => ({type: SET_CITY, payload});
export const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

const api_key = 'fd0401e174aad780fd25f190400efa2c';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/forecast';

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url_base_weather}?q=${payload}&appid=${api_key}`

        dispatch(setCity(payload));

        return fetch(url_forecast).then(
            res => (res.json())
        ).then(data => {
            const forecastData = transformForecast(data);
            dispatch(setForecastData({city: payload, forecastData}));
        });
    }
};
