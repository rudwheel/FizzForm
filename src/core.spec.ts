import { analyzeNumber, generateRandomList } from "./core";

describe("analyzeNumber", () => {
  it('should return "Gestform" when the number is divisible by both 3 and 5', () => {
    expect(analyzeNumber(15)).toBe("Gestform");
    expect(analyzeNumber(30)).toBe("Gestform");
    expect(analyzeNumber(45)).toBe("Gestform");
  });

  it('should return "Geste" when the number is divisible by 3 but not by 5', () => {
    expect(analyzeNumber(3)).toBe("Geste");
    expect(analyzeNumber(6)).toBe("Geste");
    expect(analyzeNumber(9)).toBe("Geste");
  });

  it('should return "Forme" when the number is divisible by 5 but not by 3', () => {
    expect(analyzeNumber(5)).toBe("Forme");
    expect(analyzeNumber(10)).toBe("Forme");
    expect(analyzeNumber(20)).toBe("Forme");
  });

  it("should return the number as a string when it is not divisible by either 3 or 5", () => {
    expect(analyzeNumber(2)).toBe("2");
    expect(analyzeNumber(7)).toBe("7");
    expect(analyzeNumber(11)).toBe("11");
  });
});

describe("generateRandomList", () => {
  it("should generate a list of the correct size", () => {
    const size = 10;
    const list = generateRandomList(size);
    expect(list.length).toBe(size);
  });

  it("should generate numbers within the specified range", () => {
    const size = 100;
    const min = -50;
    const max = 50;
    const list = generateRandomList(size, min, max);
    list.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(min);
      expect(num).toBeLessThanOrEqual(max);
    });
  });

  it("should handle negative size", () => {
    const size = -5;
    const list = generateRandomList(size);
    expect(list.length).toBe(0);
  });

  it("should handle size of zero", () => {
    const size = 0;
    const list = generateRandomList(size);
    expect(list.length).toBe(0);
  });

  it("should handle min greater than max", () => {
    const size = 10;
    const min = 50;
    const max = -50;
    const list = generateRandomList(size, min, max);
    expect(list.length).toBe(0);
  });
});
