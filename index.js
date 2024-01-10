function findMatching(driverNames, nameToFind) {
    return driverNames.filter(driverName => driverName.toUpperCase() === nameToFind.toUpperCase());
}

function fuzzyMatch(driverNames, desiredStartingCharacters) {
    return driverNames.filter(driverName => driverName.toUpperCase().startsWith(desiredStartingCharacters.toUpperCase()));
}

function matchName(driverData, nameToFind) {
    return driverData.filter(singleDriver => singleDriver.name.toUpperCase() === nameToFind.toUpperCase());
}