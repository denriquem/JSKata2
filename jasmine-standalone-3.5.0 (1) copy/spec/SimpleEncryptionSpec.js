describe("Encrypter", () => {
    let encrypter;

    beforeEach(() => {
        encrypter = new Encrypter();
    });

    describe("#encrypt", () => {
        it('should return "hsi  etTi sats!" when passed "This is a test!"', () => {
            expect(encrypter.encrypt("This is a test!", 1)).toEqual(
                "hsi  etTi sats!"
            );
        });

        it("should loop through and encrpyt twice if the number passd in is 2", () => {
            expect(encrypter.encrypt("This is a test!", 2)).toEqual(
                "s eT ashi tist!"
            );
        });
    });

    describe("#decrypt", () => {
        it('should return "This is a test" when passed "hsi  etTi sats!"', () => {
            expect(encrypter.decrypt("hsi  etTi sats!"), 1).toEqual(
                "This is a test!"
            );
        });

        it("should decrypt a longer and more complex sentece", () => {
            expect(
                encrypter.decrypt(" elyejyetn ra nweedIral no aigbedo ekns", 1)
            ).toEqual("I really enjoy eating bread on weekends");
        });
    });
});
