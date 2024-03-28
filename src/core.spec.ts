import { analyzeNumber } from "./core";

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
});
