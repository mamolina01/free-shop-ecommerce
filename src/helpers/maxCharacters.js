export const maxCharacters = (word,limit) => {
	if (word.length > limit) {
		let newValue = word.slice(0, limit).trim() + "...";
		return newValue;
	} else {
		return word;
	}
};
