const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
const emptyArray = [1,2,3]

function lowerCaseWords(array) {
	new Promise(function (resolve, reject) {
		const wordArray = array.filter((word) => word.length > 0);
		if (wordArray.length > 0) {
			resolve();
			const lowerCaseArray = wordArray.map(word => word.toLowerCase());
			console.log(lowerCaseArray);
		}

		else {
			reject("Array does not have any strings")
		}
		
		

	});
}
//promise will be rejected if the second array is used, because it has no strings to lowercase

lowerCaseWords(mixedArray);
//lowerCaseWords(emptyArray);

