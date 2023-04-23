const getFirstNames = require("../utilities/utils/index");
const peopleNames = require("../country/state/city/index");

function getPeopleInCity(peopleNames) {
  return getFirstNames(peopleNames);
}
module.exports = getPeopleInCity;
