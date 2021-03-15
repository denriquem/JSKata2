describe("ZeroMover", () => {
    let zeroMover;

    beforeEach(() => {
        zeroMover = new ZeroMover();
    });

    describe("move", () => {
        it("should move only zero moved to end off array", () => {
            expect(zeroMover.move([1, 2, 0, 4])).toEqual([1, 2, 4, 0]);
        });
    });
});
