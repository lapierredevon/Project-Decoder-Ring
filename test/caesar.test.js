const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() submission tests written by Thinkful", () => {
  describe("error handling", () => {
    it("should return false if the shift amount is 0", () => {
    
      const actual = caesar("zebra magazine",  0);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
      
      const actual = caesar("zebra magazine", 26);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      
      const actual = caesar("zebra magazine", -26);

      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
      
      const actual = caesar("message", 3);
      const expected = "phvvdjh";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
     
      const actual = caesar("a message.", 3);
      const expected = "d phvvdjh.";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
     
      const actual = caesar("A Message", 3);
      const expected = "d phvvdjh";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      
      const actual = caesar("zebra magazine", 3);
      const expected = "cheud pdjdclqh";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      
      const actual = caesar("zebra magazine", -3);
      const expected = "wbyox jxdxwfkb";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
     
      const actual = caesar("phvvdjh", 3, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      
      const actual = caesar("d phvvdjh.", 3, false);
      const expected = "a message.";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      
      const actual = caesar("D pHvvdjh", 3, false);
      const expected = "a message";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
     
      const actual = caesar("cheud pdjdclqh", 3, false);
      const expected = "zebra magazine";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      
      const actual = caesar("wbyox jxdxwfkb", -3, false);
      const expected = "zebra magazine";

      expect(actual).to.equal(expected);
    });
  });
});
