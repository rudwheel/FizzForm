import { analyzeNumber } from "./core";

describe("analyzeNumber", () => {
  it('should return "Gestform" when the number is divisible by both 3 and 5', () => {
    expect(analyzeNumber(15)).toBe("Gestform");
    expect(analyzeNumber(30)).toBe("Gestform");
    expect(analyzeNumber(45)).toBe("Gestform");
  });
});
