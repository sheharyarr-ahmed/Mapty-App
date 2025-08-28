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
// let map, mapEvent; no need of these global classes anymore

//implmenting the architecture
class App {
  #map;
  #mapEvent;
  constructor() {
    // In the constructor, we add event listeners and call initialization methods so that when an App object is created, these listeners are set up immediately. This happens after the script is loaded and executed, not before.
    //methods in the constructor are immediately triggered when the page loads
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this)); //here this new workout is an event handler function which is an function of event handler and the value of this in the event listenrers is pointing towrds teh dom element not the app object herefore we use bind method and pass this in it to point towards the app object.

    //selecting the type of form for runnning and cycling
    inputType.addEventListener('change', this._toggleElevationField); // here we dont need to use the bind method because in the function there was no this keyword used.
  }
  _getPosition() {
    // experimenting with the geo-location API and adding the map via leaflet library
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position!');
        }
      );
  }
  _loadMap(position) {
    //this api accepts two call back functionsone when successfully find the geo locationand the other if it fails to find the geo location
    // console.log(hey); //was experimenting added an anohter file in the html index and was experimenting on how to connect more than one scripts.
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(
      `https://www.google.com/maps/@${latitude},${longitude},16z?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D`
    );

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    //adding the putting the marker on click on map, here map.on is acting an event-listener provided by the library itself, read docs for more
    this.#map.on('click', this._showForm.bind(this)); //this is an event listener here the on method is represenitg an event listener method as it made from api
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
    console.log(mapE);
  }
  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
  _newWorkout(e) {
    //submit pressing enter then the marker will appear
    e.preventDefault();
    inputDistance.value =
      inputCadence.value =
      inputElevation.value =
      inputDuration.value =
        '';
    //display marker
    const { lat, lng } = this.#mapEvent.latlng;
    //all of the chained mehthods below are the properties of api, see the docs
    L.marker([lat, lng])
      .addTo(this.#map)
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
  }
}

const app = new App();
