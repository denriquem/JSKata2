class ZeroMover {
    constructor() {}

    move(input) {
        return input
            .filter((x) => {
                x !== 0;
            })
            .concat(
                input.filter((x) => {
                    x === 0;
                })
            );
    }
}
