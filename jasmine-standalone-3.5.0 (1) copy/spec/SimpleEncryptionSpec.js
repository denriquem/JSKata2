describe("Encrypter", () => {
	let encrypter;

	beforeEach(() => {
		encrypter = new Encrypter();
	});

	describe("#encrypt", () => {
		it('should return "hsi  etTi sats!" when passed "This is a test!"', () => {
			expect(encrypter.encrypt("This is a test", 1)).toEqual(
				"hsi  etTi sats!"
			);
		});
	});
});
