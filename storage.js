class Storage {
  constructor() {
    this.city;
    this.state;
    // this.defaultCity = 'Pittsburgh';
    // this.defautState = 'PA';
  }

  setLocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }

  getLocationData() {
    // Check if city is in local storage
    if(localStorage.getItem('city') === null) {
      this.city = 'Pittsburgh';
    } else {
      this.city = localStorage.getItem('city');
    }

    // Check if state is in local storage
    if(localStorage.getItem('state') === null) {
      this.state = 'PA';
    } else {
      this.state = localStorage.getItem('state');
    }

    return {
      city: this.city,
      state: this.state
    }
  }
}
