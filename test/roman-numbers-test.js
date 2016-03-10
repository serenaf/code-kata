var expect = require('chai').expect;
var roman = require('../lib/roman-numbers');

describe('RomanNumbers', () => {
 it('should return I for 1', function(){
  expect(roman(1)).to.equal('I');
 });
 // it('should return V for 5', function(){
 //  expect(roman(5)).to.equal('V');
 // });
 // it('should return X for 10', function(){
 //  expect(roman(10)).to.equal('X');
 // });
 // it('should return L for 50', function(){
 //  expect(roman(50)).to.equal('L');
 // });
 // it('should return C for 100', function(){
 //  expect(roman(100)).to.equal('C');
 // });
 // it('should return D for 500', function(){
 //  expect(roman(500)).to.equal('D');
 // });
 // it('should return M for 1000', function(){
 //  expect(roman(1000)).to.equal('M');
 // });
});
