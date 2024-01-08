// Code your solution in this file!
let hq = 42;
function distanceFromHqInBlocks(location) {
    return Math.abs(hq-location);
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location)*264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination-start)*264;
}

function calculatesFarePrice(start, destination) {
    let feetTravelled = distanceTravelledInFeet(start, destination);
    if (feetTravelled <= 400) {
        return 0;
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled-400)*0.02;
    } else if (feetTravelled > 2000 && feetTravelled<= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}