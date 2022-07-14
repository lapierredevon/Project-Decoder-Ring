const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() submission tests written by Thinkful", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const actual = polybius("message");
      const expected = "23513434112251";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const actual = polybius("jiggle");
      const expected = "424222221351";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const actual = polybius("my message");
      const expected = "2345 23513434112251";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const actual = polybius("23513434112251", false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const actual = polybius("424222221351", false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const actual = polybius( "2345 23513434112251", false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {

      const actual = polybius("2345 235134341122514", false);

      expect(actual).to.be.false;
    });
  });
});

