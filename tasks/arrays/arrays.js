// **
//  * return an array of characters names
//  * @param {Array} chars
//  * @return {Array} - char names
//  */
function getCharactersNames(chars) {
    let names = [ ];
    for (char of chars) {
        names.push(char.name);
    } 
    return names;
}

/**
 * print (console.log) names of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
    let name = ' ';

    chars.forEach(char => {
        console.log(char.name);
    });

}


/**
 * return an array of non-human characters
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
    let nonHumanChar = chars.filter(char => {
       return char.species !== 'Human'
       ;});
       
       return nonHumanChar;
}


/**
 * return info about character named 'Jerry Smith'
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
    let info = chars.filter(char =>{
        return char.name === 'Jerry Smith';
    });
    return info[0];
}

/**
 * check if all characters are human. return true if all, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
    return chars.every (char => char.species === "Human");
}

/**
 * check if there are any Fish-Person characters. return true if any, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
    return chars.some (char => char.type === "Fish-Person");
}

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 */
function minItem(arr) {
    let minItem = arr[0];

    for (let a = 1; a < arr.length; a++) {
        if (minItem > arr[a]) {
            minItem = arr[a];

        }
    } 
    return arr.indexOf(minItem);
}

module.exports = {
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson,
    minItem
};
