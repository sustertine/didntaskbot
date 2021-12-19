const MessageResponseGenerator = require('./message-response-generator');
const GIFResponseGenerator = require('./gif-response-generator');

exports.getRandomResponse = () => {
	if (randomlyPRun(0.25)) {
		if (randomlyPRun(0.45)) {
			return MessageResponseGenerator.getRandomMessageResponse();
		} else {
			return GIFResponseGenerator.getRandoMGIFResponse();
		}
	}
	return null;
};

var randomlyPRun = (P) => {
	return !!P && Math.random() <= P;
};
