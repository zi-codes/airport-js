function Airport(weather) {
  this._weather = new Weather();
  this._planes_array = [];
  this.planes = function() {
    return this._planes_array;
  };
  this.receive = function(plane) {
    this._planes_array.push(plane);
  };
  this.takeoff = function(plane) {
    var index = this._planes_array.indexOf(plane);
    this._planes_array.splice(index, 1);
  };
  this.isStormy = function() {
    //this still to be refactored to get the tests to pass
    return this._weather.isStormy();
  };
}
