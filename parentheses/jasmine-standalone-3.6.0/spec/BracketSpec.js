describe("Bracket", () => {
    let bracket;

    beforeEach(() => {
        bracket = new Bracket();
    });

    describe("#check", () => {
        it('should return false when passed "("', () => {
            expect(bracket.check("(")).toEqual(false);
        });
    });
});
