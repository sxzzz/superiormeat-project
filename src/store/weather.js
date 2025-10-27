// src/store/weather.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useWeatherStore = defineStore('weather', {
    state: () => ({
        weatherData: null,
        loading: false,
        error: null,
    }),
    actions: {
        async fetchWeather(lat, lon) {
            this.loading = true
            this.error = null
            try {
                // 使用 wttr.in，
                const response = await axios.get(
                    `https://wttr.in/${lat},${lon}?format=j1`
                )
                console.log("Weather response:", response.data);
                this.weatherData = response.data
            } catch (err) {
                this.error = '无法获取天气信息'
            } finally {
                this.loading = false
            }
        },
    },
})