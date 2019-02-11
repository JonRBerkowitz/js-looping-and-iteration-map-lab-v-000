// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes (drivers) {
  return drivers.map(function(driver) {
    return { first_name: driver.split(" ")[0], last_name: driver.split(" ")[1] };
  });
}
