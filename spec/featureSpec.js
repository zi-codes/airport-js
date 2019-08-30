describe("features test", function() {
  var plane;
  var airport;
  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  describe("under normal conditions", function() {
    beforeEach(function() {
      spyOn(Math, "random").and.returnValue(0);
    });

    it("planes can be instructed to land at an airport", function() {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it("planes can be instructed to takeoff from an airport", function() {
      plane.land(airport);
      plane.takeoff(airport);
      expect(airport.planes()).not.toContain(plane);
      console.log(airport.planes());
    });
  });

  describe("under stormy conditions", function() {
    it("stops takeoff when weather is stormy", function() {
      spyOn(Math, "random").and.returnValue(1);
      expect(function() {
        plane.takeoff(airport);
      }).toThrowError("too stormy");
    });
    it("stops landing when weather is stormy", function() {
      spyOn(Math, "random").and.returnValue(1);
      expect(function() {
        plane.land(airport);
      }).toThrowError("too stormy");
    });
  });
});
