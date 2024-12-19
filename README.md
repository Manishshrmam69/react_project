#  🌡️ Weather App with React<br />
This is a simple weather application built using React. It allows users to search for a location and retrieve current weather information. The app utilizes the OpenWeatherMap API to fetch weather data based on the user's input.

## 📸 Preview

<img src = "screenshot\01.png" alt = "weather app with React" style = "width:100%;"/><br />
<img src = "screenshot\02.png" alt = "weather app with React" style = "width:100%;"/>
<br/>

## ✨ Features

- Type the name of city whose weather has to be known OR allow location access(to check weather of present location).
- Displays the present weather conditions (Temperature, Humidity, Cloud Cover) along with forecasts for the future.
- Dark and Light Theme 
- Toggle between Celsius and Fahrenheit temperature units
- Responsive design for a seamless experience on different devices
- Error handling for invalid location searches or failed API requests

## 🤖Technologies Used

`WeatherApp` is built using the following technologies:

- `React.js`: A JavaScript library for building user interfaces.
  Used React features likes states, contexts etc.
- `OpenWeatherMap API`: An API that provides access to weather data, including current weather conditions, forecasts, and more.
- `Axios`: A promise-based HTTP client for making API requests from the frontend.


## 💻Getting Started

To run the WeatherApp locally, follow these steps:

1. Clone the repository: `https://github.com/Dikshant441/Weather-5day-forecast.git`.
2. Go to root folder.
3. Install the dependencies: `npm install`
4. Create a free account on OpenWeatherMap to obtain an API key. : `https://home.openweathermap.org/api_keys`.
5. Create a .env file and replace `<REACT_APP_API_KEY>` with your actual API key.
6. Start the development server: `npm start`.
7. Open your web browser and visit `http://localhost:3000` to access the WeatherApp.

## 📑Resources
- [OpenWeatherMap documentation](https://openweathermap.org/)

## ✨Credits
`WeatherApp` is developed and maintained by `Dikshant Singh`. Weather data is retrieved from the [OpenWeatherMap API](https://openweathermap.org/).

## 📧Contacts
For any inquiries or feedback, please contact [Here](mailto:singhdikshant200@gmail.com).


## if got some error regarding Node Packages install these packages
- npm i react-icons
- npm i axios
- npm i react-i18next
- npm i --save moment
- npm i gsap