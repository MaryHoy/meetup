import React, { Component } from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { OfflineAlert } from './Alert';

class App extends Component {

  componentDidMount() {
    getEvents().then(response => this.setState({ events: response }));
    window.addEventListener('online', this.OfflineAlert());
  }

  state = {
    events: [],
    page: [],
    defaultCity: '',
    lat: null,
    lon: null,
    OfflineText: ''
  }

  OfflineAlert = () => {
    if(navigator.onLine === false) {
      this.setState({
        offlineText: 'No internet connection. Please connect to view updated list.'
      });
    } else {
      this.setState({
        offlineText: '',
      });
    }
  }

  updateEvents = (lat, lon, page) => {
    if(lat && lon) {
      getEvents(lat, lon, this.state.page).then(response => this.setState({ events: response, lat, lon }));
    }
    else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(response => this.setState({ events: response, page }));
    }
    else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(response => this.setState({ events: response }));
    }
  }

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={this.state.events.length} lat={this.state.lat} lon={this.state.lon} />
        <EventList events={this.state.events} />
        <OfflineAlert text={this.state.offlineText} />
      </div>
    );
  }
}

export default App;