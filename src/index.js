/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const API_KEY = '8205b72ca3511ffde1837c2d512326b4';
const PLACE = 'chile';
const weatherApp = document.querySelector('#weatherApp');

const inputPlace = document.querySelector('#input-place');
const submitPlace = document.querySelector('#submit-place');

const createClimateCard = (place) => {

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${API_KEY}`;

  window
  .fetch(URL)
  .then((response) => response.json())
  .then ((responseJson) => {
    const allItems = [];

    const infoWeather = document.createElement('p');
    infoWeather.className = 'text-xl';
    infoWeather.textContent = responseJson.weather[0].description;

    const userPlace = document.createElement('p');
    userPlace.className = 'text-xm';
    userPlace.textContent = responseJson.name;

    const container_info_place = document.createElement('div');
    container_info_place.append(infoWeather, userPlace);

    const temperature = document.createElement('h2');
    temperature.className = 'text-4xl';
    temperature.textContent = `${responseJson.main.temp}°c`;

    const container_temp = document.createElement('div');
    container_temp.className = 'flex justify-around'
    container_temp.append(temperature, container_info_place);

    const weatherIcon = document.createElement('img');
    weatherIcon.className = 'mx-auto w-28 py-7';
    weatherIcon.src = 'https://www.flaticon.com/svg/vstatic/svg/2930/2930014.svg?token=exp=1616387186~hmac=f1b8b95eca77cf47148c98e97c8cc55c';

    const container_top_card = document.createElement('div');
    container_top_card.className = 'flex flex-col content-between h-3/4'
    container_top_card.append(weatherIcon, container_temp);

    const pressure_img = document.createElement('img');
    pressure_img.className = 'mx-auto w-6';
    pressure_img.src = 'https://www.flaticon.es/svg/vstatic/svg/632/632517.svg?token=exp=1616387508~hmac=5e5cf614723fd07b805570e3ddc5d5d6';

    const pressure_text = document.createElement('p');
    pressure_text.textContent = `${responseJson.main.pressure} Pa`;

    const container_pressure = document.createElement('div');
    container_pressure.append(pressure_img, pressure_text);

    const tempMax_img = document.createElement('img');
    tempMax_img.className = 'mx-auto w-6';
    tempMax_img.src = 'https://www.flaticon.es/svg/vstatic/svg/1684/1684426.svg?token=exp=1616387549~hmac=d9274d828dfddc58f57e0695c5ef1f5f';

    const tempMax_text = document.createElement('p');
    tempMax_text.textContent = `${responseJson.main.temp_max}°c`;

    const container_tempMax = document.createElement('div');
    container_tempMax.append(tempMax_img, tempMax_text);

    const tempMin_img = document.createElement('img');
    tempMin_img.className = 'mx-auto w-6';
    tempMin_img.src = 'https://www.flaticon.es/svg/vstatic/svg/899/899708.svg?token=exp=1616387549~hmac=b58be81cbc32814c51e85485dce2b6d3';

    const tempMin_text = document.createElement('p');
    tempMin_text.textContent = `${responseJson.main.temp_min}°c`;

    const container_tempMin = document.createElement('div');
    container_tempMin.append(tempMin_img, tempMin_text);

    const container_bottom_card = document.createElement('div');
    container_bottom_card.className = 'flex justify-around p-3 bg-gray-200 h-1/4';
    container_bottom_card.append(container_pressure, container_tempMax, container_tempMin);

    const container_card = document.createElement('div');
    container_card.className = 'relative flex flex-col content-end mx-auto m-3 w-72 h-80 border-2 border-gray-200 rounded-xl';
    container_card.append(container_top_card, container_bottom_card);

    allItems.push(container_card);

    weatherApp.append(...allItems);
  })
}

const climateSubmit = () => {
  const place = inputPlace.value;

  createClimateCard(place);

  inputPlace.value = '';

  console.log(place)
}

submitPlace.addEventListener('click', climateSubmit);
inputPlace.addEventListener("keyup", function(event) {
  console.log(event.keyCode)
  event.preventDefault();
  if (event.keyCode === 13) {
    submitPlace.click();
  }
});



