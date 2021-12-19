exports.getRandomMessageResponse = () => {
	const index = Math.floor(Math.random() * Object.keys(messages).length + 1);
	return messages[index];
};

const messages = {
	1: 'With whom is he conversing?',
	2: "Didn't ask",
	3: "I don't remember asking?",
	4: 'Wow, that is a very interesting story, however I do not recall asking.',
	5: 'Who asked?',
	6: 'Ok, but who asked?',
	7: 'How very insightful, but unfortunately nobody here asked.',
	8: 'Interesting point, however, nobody inquired.',
	9: 'Why r u talking to me?',
	10: "Didn't ask + L + ratio + u fell off + cope",
	11: 'Nobody asked.',
	12: "Can't say I remember asking.",
	13: "Damn bro, that's crazy",
	14: "Damn that's crazy, but who asked?",
};
