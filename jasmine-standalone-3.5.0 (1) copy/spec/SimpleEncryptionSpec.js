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
});
