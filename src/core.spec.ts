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
  
  it('should return "Forme" when the number is divisible by 5 but not by 3', () => {
    expect(analyzeNumber(5)).toBe("Forme");
    expect(analyzeNumber(10)).toBe("Forme");
    expect(analyzeNumber(20)).toBe("Forme");
  });
});
