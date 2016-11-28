
  'use strict';
  


   var chai = require('chai');
   var expect = chai.expect;

   var myApp = require('../app/oop.js');
  describe("Mobile Class: Create a Mobile, make it charge", function() {

    it("The Mobile should be a type of `object`, and an instance of the `Mobile` class", function() {
      var Samsung = new myApp.Mobile('Samsung');
      expect(typeof Samsung).toEqual(typeof {});
      expect(Samsung instanceof Mobile).toBeTruthy();
    });

    it("The Mobile should be called 'General' if no name is passed as a parameter", function() {
      var gm = new myApp.Mobile();
      expect(gm.name).toEqual('General');
      expect(gm.model).toBe('GM');
    });

    it("The Mobile name and model should be a property of the Mobile", function() {
      var Infinix  = new Mobile('Infinix', 'Hot Note');
      expect(Infinix.name).toBe('Infinix');
      expect(Infinix.model).toBe('Hot Note');
    });


    it("The Mobile shoud have one sim except its an Iphone", function() {
      var man  = new Mobile('Sony', 'Truck', 'Iphone');
      expect(man.numOfWheels).toBe(1);
;
    });



    it("The Mobile drive function should return the instance of the Mobile class", function() {
      var man  = new Mobile('MAN', 'Truck', 'trailer');
      var chargingMan = man.charge(7);
      expect(chargingMan instanceof Mobile).to.be(true);
      expect(typeof chargingMan.drive).toBe(typeof (function (){}));
      expect(man.charge).toBe(chargingMan.charge);
    });
})