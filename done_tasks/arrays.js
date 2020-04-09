/**
 * 1. Write a method to reverse a string; Function should return the string 'This is not a string'
 * if a number is passed
* @param {string}
*/
function reverseString(str) {
  if (typeof str != 'string') {
    return 'This is not a string!';
  }
  return str.split('').reverse().join('');
}

/**
 * return an array of characters names
 */
function getCharactersNames(chars) {
	const names = [];
  for (char of chars) {
		names.push(char.name);
	}
	return names;
}

/**
 * print (console.log) ids of all characters
 */
function printCharacterNames(chars) {
	for (char of chars) {
		console.log(char.name);
	}
}

/**
 * return an array of non-human characters
 */
function getNonHumanCharacters(chars) {
	let nonHumans = chars.filter(char => {
		return char.species !== 'Human';
	});
	return nonHumans;
}

/**
 * return info about character named 'Jerry Smith'
 */
function getJerryInfo(chars) {
	let jerryInfo = chars.filter(char => {
		return char.name === 'Jerry Smith';
	});
	return jerryInfo[0];
}

/**
 * check if all characters are human. return true if all, false if not
 */
function isAllHuman(chars) {
	return chars.every(char => char.species === 'Human');
}

/**
 * check if there are any Fish-Person characters. return true if any, false if not
 */
function isAnyFishPerson(chars) {
	return chars.some(char => char.type === 'Fish-Person');
}

/**
 * 1. Write a method to find an index of minimal item from an array;
* @param {array} arr
*/
function minItem(arr) {
	//PLACE YOUR CODE HERE
	let minItem = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (minItem > arr[i]) {
			minItem = arr[i];
		}
	}
	return arr.indexOf(minItem);
}

module.exports = {
    reverseString,
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson,
    minItem
};
