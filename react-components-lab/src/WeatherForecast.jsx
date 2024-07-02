import './WeatherForecast.css'

const WeatherForecast = (props) => {
    const { weather } = props
    return (
        <div className="weather">
            <h2>{ weather.day }</h2>
            <img src={weather.img } alt={weather.imgAlt} />
            <p><strong>conditions:</strong> { weather.conditions } </p>
            <p><strong>time:</strong> { weather.time } </p>
        </div>
    );
};

export default WeatherForecast;