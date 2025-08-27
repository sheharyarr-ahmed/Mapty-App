'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
//setting up the global variables
let map, mapEvent;

// experimenting with the geo-location API and adding the map via leaflet library
navigator.geolocation.getCurrentPosition(
  //this api accepts two call back functionsone when successfully find the geo locationand the other if it fails to find the geo location
  function (position) {
    // console.log(hey); //was experimenting added an anohter file in the html index and was experimenting on how to connect more than one scripts.
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(
      `https://www.google.com/maps/@${latitude},${longitude},16z?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D`
    );

    const coords = [latitude, longitude];

    map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    //adding the putting the marker on click on map, here map.on is acting an event-listener provided by the library itself, read docs for more
    map.on('click', function (mapE) {
      mapEvent = mapE;
      form.classList.remove('hidden');
      inputDistance.focus();
      console.log(mapE);
    });
  },
  function () {
    alert('Could not get your position!');
  }
);

form.addEventListener('submit', function (e) {
  //submit pressing enter then the marker will appear
  e.preventDefault();
  //display marker
  const { lat, lng } = mapEvent.latlng;
  //all of the chained mehthods below are the properties of api, see the docs
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Workout')
    .openPopup();
});

//selecting thr type of form for runnning and cycling
inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
