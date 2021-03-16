describe("Bracket", () => {
    let bracket;

    beforeEach(() => {
        bracket = new Bracket();
    });

    describe("#check", () => {
        it('should return false when passed "("', () => {
            expect(bracket.check("(")).toEqual(false);
        });

        it('should return true when passed "()"', () => {
            expect(bracket.check("()")).toEqual(true);
        });

        it('should return true when passed "())"', () => {
            expect(bracket.check("())")).toEqual(false);
        });
    });
});
