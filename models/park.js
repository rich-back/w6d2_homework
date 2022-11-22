const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur) {
    this.dinosaurs.pop(dinosaur);
};

Park.prototype.findMostPopularDinosaur = function() {
    let dinosaurGuestsAttracted = [];
    for (const dinosaur of this.dinosaurs) {
        dinosaurGuestsAttracted.push(dinosaur.guestsAttractedPerDay);
    }
    return Math.max(...dinosaurGuestsAttracted);
};

Park.prototype.findDinosaurBySpecies = function(dinosaur) {
    let dinosaurToAdd = dinosaur.species
    let dinosaurBySpecies = [];
    for (const dinosaur of this.dinosaurs) {
        if (dinosaurToAdd === this.dinosaurs.species) {
        dinosaurBySpecies.push(dinosaur);
        } 
       }
    return dinosaurBySpecies;
};

Park.prototype.visitorsPerDay = function() {
    let dailyTotal = 0;
    for (const dinosaur of this.dinosaurs) {
        dailyTotal += dinosaur.guestsAttractedPerDay;
    } 
    return dailyTotal;
}

Park.prototype.visitorsPerYear = function() {
    return this.visitorsPerDay() * 365;
};

Park.prototype.annualRevenue = function() {
    return this.visitorsPerYear() * this.ticketPrice;
};


















module.exports = Park