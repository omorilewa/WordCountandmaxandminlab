'use strict'

var chai = require('chai');
var expect = chai.expect;

var myApp = require('../app/primenumbers.js');


describe("Prime numbers  tests ", function() {
  describe("Case for some false values", function() {

    it("should return 'Enter a valid value' for sting", function() {
      expect(myApp.getPrimes('a')).to.eql('Enter a valid value');
    });

    it("should return 'Enter a valid value' for empty value or null", function() {
      expect(myApp.getPrimes()).to.eql('Enter a valid value');
    });
    it("should return 'Enter a valid value' for boolean", function() {
      expect(myApp.getPrimes(true)).to.eql('Enter a valid value');
    });
  });



  describe("Case for Numbers", function() {
     it("should return '[]' for 1", function() {
      expect(myApp.getPrimes(1)).to.eql([]);
    });
  
    it("should return [2,3] for 4", function() {
      expect(myApp.getPrimes(4)).to.eql([2,3]);
    });

	
    it("should return '[ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]' for 50" , function() {
      expect(myApp.getPrimes(50)).to.eql([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]);
    });

   


  });

  
  });
