export function analyzeNumber(inputNumber: number): string {
  // Si le nombre est un multiple de 3 et 5, retourne "Gestform"
  if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
    return "Gestform";
  }
  // Si le nombre est un multiple de 3, retourne "Geste"
  else if (inputNumber % 3 === 0) {
    return "Geste";
  }
  // Si le nombre n'est pas un multiple de 3 ou 5, retourne le nombre sous forme de chaîne de caractères
  else {
    return inputNumber.toString();
  }
}
