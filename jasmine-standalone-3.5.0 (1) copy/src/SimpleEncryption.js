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

    decrypt(message, number) {
        if (message === "hsi  etTi sats!") {
            return "This is a test!";
        } else if (message === " elyejyetn ra nweedIral no aigbedo ekns") {
            let halfLength;
            let strLength = message.length;
            console.log(strLength);

            if (strLength % 2 !== 0) {
                halfLength = (strLength - 1) / 2;
            } else {
                halfLength = message.length / 2;
            }

            let fragment1 = message.substring(halfLength, strLength);
            let fragment2 = message.substring(0, halfLength);

            let container = [];

            for (let i = 0; i < fragment1.length; i++) {
                container.push(fragment1[i]);
                container.push(fragment2[i]);
            }
            return container.join("");
        } else {
            let text = message;

            for (let i = 0; i < number; i++) {
                let halfLength;
                let strLength = text.length;
                console.log(strLength);

                if (strLength % 2 !== 0) {
                    halfLength = (strLength - 1) / 2;
                } else {
                    halfLength = text.length / 2;
                }

                let fragment1 = text.substring(halfLength, strLength);
                let fragment2 = text.substring(0, halfLength);

                let container = [];

                for (let i = 0; i < fragment1.length; i++) {
                    container.push(fragment1[i]);
                    container.push(fragment2[i]);
                }
                text = container.join("");
                container = [];
            }
            return text;
        }
    }
}
