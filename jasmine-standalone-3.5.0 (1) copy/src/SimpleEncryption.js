class Encrypter {
	constructor() {}

	encrypt(message, number) {
		let text = message;
		let container = [];

		for (var i = 0; i < number; i++) {
			for (let i = 0; i < text.length; i++) {
				if (i % 2 !== 0) {
					container.push(text[i]);
				}
			}
			console.log(container);
			for (let i = 0; i < text.length; i++) {
				if (i % 2 === 0) {
					container.push(text[i]);
				}
			}

			text = container.join("");
			container = [];
		}

		return text;
	}
}
