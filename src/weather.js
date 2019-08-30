function Weather() {
  this._CHANCE_OF_STORMY = 0.5;
  this.isStormy = function() {
    return Math.random() > this._CHANCE_OF_STORMY;
  };
}
