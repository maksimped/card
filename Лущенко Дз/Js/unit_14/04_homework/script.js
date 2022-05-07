// task 1 --------------------


let select = document.querySelector('.container__select');

const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "e7b0455a831a237e13a7e8ba807a4e4d"
}



function getWeather() {

    fetch(`${param.url}weather?id=${select.value}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}



function showWeather(data) {
    let image = data.weather['0'].icon + '.png';


    document.querySelector('.out-1').innerHTML = Math.round(data.main.temp) + '&deg';
    document.querySelector('.out-2').innerHTML = data.main.humidity + ' %';

    document.querySelector('.out-3').innerHTML = data.weather['0'].description;
    document.querySelector('.out-4').innerHTML = `<img src="https://openweathermap.org/img/wn/${image}">`;


}


getWeather();
select.onchange = getWeather;