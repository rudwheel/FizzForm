import { analyzeNumber, generateRandomList, processList } from "./core";

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

  describe("processList", () => {
    it('should return an array of "Gestform" when the numbers are divisible by both 3 and 5', () => {
      expect(processList([15, 30, 45])).toEqual([
        "Gestform",
        "Gestform",
        "Gestform",
      ]);
    });

    it('should return an array of "Geste" when the numbers are divisible by 3 but not by 5', () => {
      expect(processList([3, 6, 9])).toEqual(["Geste", "Geste", "Geste"]);
    });

    it('should return an array of "Forme" when the numbers are divisible by 5 but not by 3', () => {
      expect(processList([5, 10, 20])).toEqual(["Forme", "Forme", "Forme"]);
    });

    it("should return an array of numbers as strings when they are not divisible by either 3 or 5", () => {
      expect(processList([2, 7, 11])).toEqual(["2", "7", "11"]);
    });

    it('should return an array with a mix of "Gestform", "Geste", "Forme", and numbers as strings when the input array is a mix of numbers', () => {
      expect(processList([15, 3, 5, 2])).toEqual([
        "Gestform",
        "Geste",
        "Forme",
        "2",
      ]);
    });

    it("should return an empty array when the input array is empty", () => {
      expect(processList([])).toEqual([]);
    });
  });

  //Tests pour tuer les mutants.
  // test pour verifier bon affichage du message d'erreur si borne inversées.
  describe("generateRandomList", () => {
    // Testez un cas spécifique où min est supérieur à max
    it("should log a message when min is greater than max", () => {
      // Arrange
      // Créez un espion pour la console.log afin de pouvoir vérifier si elle a été appelée correctement
      const consoleSpy = jest.spyOn(console, "log");

      // Act
      // Appellez la fonction avec min supérieur à max
      generateRandomList(10, 20, 10);

      // Assert
      // Vérifiez que la console.log a été appelée avec le bon message
      expect(consoleSpy).toHaveBeenCalledWith(
        "les valeurs de min et max sont inversées"
      );
    });
  });
  describe("generateRandomList", () => {
    it("should generate numbers within the exact range", () => {
      // Arrange
      const size = 1000;
      const min = 10;
      const max = 20;

      // Act
      const result = generateRandomList(size, min, max);

      // Assert
      const actualMin = Math.min(...result);
      const actualMax = Math.max(...result);
      expect(actualMin).toBe(min);
      expect(actualMax).toBe(max);
    });
  });
});
