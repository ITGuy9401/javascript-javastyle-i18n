/**
 *
 * @param message {String}
 * @param arguments {Array}
 */
function resolveMessageArguments(message, arguments) {

	if (!message || message.length < 1) {
		throw new TypeError("Message has not a value or is not a String");
	}

	if (!arguments || arguments.length < 1) {
		return message;
	}

	let regExp = /({[0-9]+})/;

	let replaceGroup = {};

	for (let i = 0; i < message.length; i++) {
		let startPos = message.indexOf("{");
		let endPos;
		let id;

		if (startPos != -1) {
			endPos = message.indexOf("}", startPos);
			if (endPos != -1) {
				id = message.slice(startPos, endPos+1);
				if (regExp.test(id)) {
					id = id.slice(1, id.length - 1);
					id = Number.parseInt(id);
					if (arguments[id]) {
						message = message.replace("{" + id + "}", arguments[id]);
					}
				}
			} else {
				break;
			}
		} else {
			break;
		}
	}
	console.log(message);
	return message;

}

module.exports = resolveMessageArguments;