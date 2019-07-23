function Plane() {
  this.land = function(airport) {
    if(airport.isStormy()) {
      throw new Error('too stormy')
    } else {
      airport.receive(this);
    }
  };
  this.takeoff = function(airport) {
    if(airport.isStormy()) {
      throw new Error('too stormy')
    } else {
      airport.takeoff(this);
    }
  }
};

console.log("plane file")
