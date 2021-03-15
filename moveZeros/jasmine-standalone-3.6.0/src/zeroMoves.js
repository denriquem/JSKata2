class ZeroMover {
    constructor() {}

    move(input) {
        let bla;
        let zeroContainer = [];
        for (let i = 0; i < input.length; i++) {
            if (input[i] === 0) {
                zeroContainer.push(input.slice(i, i + 1));
                input.splice(i, 1);
            }
        }
        console.log(zeroContainer);

        for (let i = 0; i < zeroContainer.length; i++) {
            input.push(zeroContainer[i].pop());
        }
        console.log(input);
        return input;
    }
}
