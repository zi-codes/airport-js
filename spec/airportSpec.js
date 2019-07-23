describe('Airport',function(){
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport;
    plane = jasmine.createSpy('plane')
  })
  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([])
  })
  it('can receive a plane', function(){
    airport.receive(plane);
    expect(airport.planes()).toContain(plane);
  })
  it('can decide if the weather is stormy', function(){
    expect(typeof(airport.isStormy())).toEqual('boolean')
  })
})
