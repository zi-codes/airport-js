describe("features test", function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });
  it("planes can be instructed to land at an airport", function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
  it("planes can be instructed to takeoff from an airport", function(){
    plane.land(airport);
    console.log(airport.planes())
    plane.takeoff(airport);
    expect(airport.planes()).not.toContain(plane);
    console.log(airport.planes())
  })
  it("stops takeoff when weather is stormy", function(){
    plane.land(airport)
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff(airport)}).toThrowError('too stormy')
    expect(airport.planes()).toContain(plane)
  })
  it("stops landing when weather is stormy", function(){
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.land(airport)}).toThrowError('too stormy')
    expect(airport.planes()).not.toContain(plane)
  })
});
