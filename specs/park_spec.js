const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');


describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;

  beforeEach(function () {
    park = new Park('Jurassic Park', 30);
    dinosaur1 = new Dinosaur('Diplodocus', 'Ferns', 100);
    dinosaur2 = new Dinosaur('Tyrannosaurus', 'Humans', 500);
    dinosaur3 = new Dinosaur('Tyrannosaurus', 'Humans', 500);
    dinosaur4 = new Dinosaur('Diplodocus', 'Conifers', 150);
    dinosaur5 = new Dinosaur('Iguanodon', 'Ginkgo', 250);
  });

  it('should have a name', function() {
    const expected = 'Jurassic Park';
    assert.strictEqual(park.name, expected);
  });

  it('should have a ticket price', function() {
    const expected = 30;
    assert.strictEqual(park.ticketPrice, expected);
  });

  it('should have a collection of dinosaurs', function() {
    const expected = 0;
    assert.strictEqual(park.dinosaurs.length, expected);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1);
    const expected = [dinosaur1];
    assert.deepStrictEqual(park.dinosaurs, expected);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const expected = 1;
    assert.strictEqual(park.dinosaurs.length, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2); 
    park.findMostPopularDinosaur();
    const expected = 500;
    assert.strictEqual(park.findMostPopularDinosaur(), expected);
  });

  xit('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2); 
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4); 
    park.addDinosaur(dinosaur5);
    park.findDinosaurBySpecies('Diplodocus');
    const expected = 2;
    assert.strictEqual(park.findDinosaurBySpecies.length, expected);
  });


  it('should be able to calculate the total number of visitors per day', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2); 
    park.addDinosaur(dinosaur3);
    park.visitorsPerDay();
    const expected = 1100;
    assert.strictEqual(park.visitorsPerDay(), expected);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2); 
    park.addDinosaur(dinosaur3);
    park.visitorsPerYear();
    const expected = 401500;
    assert.strictEqual(park.visitorsPerYear(), expected);    
  });

  it('should be able to calculate total revenue for one year', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2); 
    park.addDinosaur(dinosaur3);
    const expected = 12045000;
    assert.strictEqual(park.annualRevenue(), expected);
  });

});
