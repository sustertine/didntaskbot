exports.getRandoMGIFResponse = () => {
	const index = Math.floor(Math.random() * Object.keys(gifs).length + 1);
	return gifs[index];
};

const gifs = {
	1: 'https://tenor.com/view/didnt-care-didnt-ask-ratio-cope-gif-22986515',
	2: 'https://tenor.com/view/susie-dance-gif-23124033',
	3: 'https://tenor.com/view/dont-care-didnt-ask-gif-22998894',
	4: 'https://tenor.com/view/yinan-didnt-ask-did-not-ask-k-bro-gif-24125701',
	5: 'https://tenor.com/view/ratio-ratioed-gif-24170356',
	6: 'https://tenor.com/view/dont-care-didnt-ask-who-asked-dont-care-didnt-ask-abhijeet-dance-gif-23136899',
	7: 'https://tenor.com/view/nordenson-gif-19287964',
	8: 'https://tenor.com/view/didnt-ask-plus-youre-female-gif-20548291',
	9: 'https://tenor.com/view/cool-story-bro-didnt-ask-cool-story-meme-random-gif-23278124',
	10: 'https://tenor.com/view/did-i-ask-didnt-ask-did-not-ask-damn-bro-thats-crazy-gif-17774308',
	11: 'https://tenor.com/view/dont-care-didnt-ask-persona-specialist-dance-yu-narukami-gif-23805773',
	12: 'https://tenor.com/view/the-rock-didnt-ask-dwayne-johnson-ratio-gif-23455727',
	13: 'https://tenor.com/view/ratio-didnt-ask-you-fell-off-cope-dont-know-what-youre-talking-about-gif-23606778',
	14: 'https://tenor.com/view/didnt-ask-pocoyo-wsp-gif-18451227',
	15: 'https://tenor.com/view/doctor-octopus-doc-oc-doctor-oc-spider-man-spider-gif-23113966',
	16: 'https://tenor.com/view/anime-gif-22931054',
	17: 'https://tenor.com/view/cope-gif-23728965',
	18: 'https://tenor.com/view/finzar-didnt-ask-finzar-memes-gif-23652865',
	19: 'https://tenor.com/view/didnt-ask-you-fell-off-ratio-didnt-ask-you-fell-off-ratio-gif-23031467',
	20: 'https://tenor.com/view/who-asked-me-trying-to-find-who-asked-spongebob-spunch-bob-gif-22526294',
};
