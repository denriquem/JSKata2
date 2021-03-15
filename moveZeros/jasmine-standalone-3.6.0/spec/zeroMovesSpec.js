describe("ZeroMover", () => {
    let zeroMover;

    beforeEach(() => {
        zeroMover = new ZeroMover();
    });

    describe("move", () => {
        it("should move only zero moved to end off array", () => {
            expect(zeroMover.move([1, 2, 0, 4])).toEqual([1, 2, 4, 0]);
        });

        it("should move a zero to the end of an array in an array with multiple data types", () => {
            expect(zeroMover.move(["words", 1, 0, 4])).toEqual([
                "words",
                1,
                4,
                0,
            ]);
        });
    });
});
