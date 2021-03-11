class Encrypter {
	constructor() {}

	encrypt(message, number) {
		let container = [];

		for (let i = 0; i < message.length; i++) {
			if (i % 2 !== 0) {
				container.push(message[i]);
			}
		}
		console.log(container);
		for (let i = 0; i < message.length; i++) {
			if (i % 2 === 0) {
				container.push(message[i]);
			}
		}

		return container.join("");
	}
}
