document.addEventListener('DOMContentLOaded', () => {
	const generateButton = document.getElementByID('generateButton');
	const resetButton = document.getElementByID('resetButton');
	const inputScreen = document.getElementByID('inputScreen');
	const outputScreen = document.getElementByID('outputScreen');
	const madLibOutput = document.getElementByID('madLibOutput');
}

generateButton.addEventListener('click', () =>{
	const words = [
		document.getElementByID('word1').value,
		document.getElementByID('word2').value,
		document.getElementByID('word3').value,
		document.getElementByID('word4').value,
		document.getElementByID('word5').value,
		document.getElementByID('word6').value,
		document.getElementByID('word7').value,
		document.getElementByID('word8').value,
		document.getElementByID('word9').value,
		document.getElementByID('word10').value,
		document.getElementByID('word11').value,
		document.getElementByID('word12').value,
		document.getElementByID('word13').value,
		document.getElementByID('word14').value,
		document.getElementByID('word15').value,
	];

	const madLib = 'I went to the movies yesterday with ${words[1]} and ${words[2]}. We saw ${words[3]}. It was ${words[4]}. At one part, I even ${words[5] and ran for the ${words[6]. During the movie, we ate ${words[7]} and ${words[8]}. I got mad because the person behind me kept ${words[9]} during the movie and would not stop ${words[10]}. He was asked to leave after he ${words[11]} across the theatre. It was pretty ${words[12]}. Overall, I liked the movie beacause it was ${words[13]} and the main character was super ${words[14]}. Hopefully next time the people sitting behind me will be more ${words[15]} ';

		madLibOutput.textContent = madLib;

		inputScreen.classList.add('hidden');
		outputScreen.classList.remove('hidden');

});

	resetButton.addEventListener('click', () => {
		inputScreen.classList.add('hidden');
		outputScreen.classList.remove('hidden');
	});

});
