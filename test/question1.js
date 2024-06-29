
const request = require('supertest');
const { expect } = require('supertest');
let server = require('../index');

// describe("Color Code Converter API", function() {

//   describe("RGB to Hex conversion", function() {

//     let url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

//     it("returns status 200", function(done) {
//       request(url, function(error, response, body) {
//         expect(response.statusCode).to.equal(200);
//         done();
//       });
//     });

//     it("returns the color in hex", function(done) {
//       request(url, function(error, response, body) {
//         expect(body).to.equal("ffffff");
//         done();
//       });
//     });

//   });

//   describe("Hex to RGB conversion", function() {
//     let url = "http://localhost:3000/hexToRgb?hex=00ff00";

//     it("returns status 200", function(done) {
//       request(url, function(error, response, body) {
//         expect(response.statusCode).to.equal(200);
//         done();
//       });
//     });

//     it("returns the color in RGB", function(done) {
//       request(url, function(error, response, body) {
//         expect(body).to.equal("[0,255,0]");
//         done();
//       });
//     });
//   });

// });

describe('Color Code Converter API', () => {
    it(' RGB to Hex conversion ', (done) => {
        request(server).get('/rgbToHex?red=255&green=255&blue=255').expect(200).expect('ffffff', function(err) { return done(err); }) });
    it(' RGB to Hex conversion ', (done) => {
        request(server).get('/rgbToHex?red=0&green=0&blue=0').expect(200).expect('000000', function(err) { return done(err); }) });
    it(' RGB to Hex conversion ', (done) => {
        request(server).get('/rgbToHex?red=12&green=16&blue=227').expect(200).expect('0c10e3', function(err) { return done(err); }) });
    it(' Hex to RGB conversion ', (done) => { 
        request(server).get('/hexToRgb?hex=00ff00').expect(200).expect('[0,255,0]', function(err) { return done(err); });});
    it(' Hex to RGB conversion ', (done) => {
        request(server).get('/hexToRgb?hex=000000').expect(200).expect('[0,0,0]', function(err) { return done(err); });});
    it(' Hex to RGB conversion ', (done) => {
        request(server).get('/hexToRgb?hex=0c10e3').expect(200).expect('[12,16,227]', function(err) { return done(err); });});
    it(' Hex to RGB conversion ', (done) => {
        request(server).get('/hexToRgb?hex=ffffff').expect(200).expect('[255,255,255]', function(err) { return done(err); });});

});

