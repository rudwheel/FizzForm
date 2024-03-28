export function analyzeNumber(inputNumber: number): string {
  // Si le nombre est un multiple de 3 et 5, retourne "Gestform"
  if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
    return "Gestform";
  }
  // Si le nombre est un multiple de 3, retourne "Geste"
  else if (inputNumber % 3 === 0) {
    return "Geste";
  }
  // Si le nombre est un multiple de 5, retourne "Forme"
  else if (inputNumber % 5 === 0) {
    return "Forme";
  }
  // Si le nombre n'est pas un multiple de 3 ou 5, retourne le nombre sous forme de chaîne de caractères
  else {
    return inputNumber.toString();
  }
}

// boundaryMin est la valeur minimale que peuvent prendre les nombres générés par la fonction generateRandomList.
const boundaryMin = -1000;

// boundaryMax est la valeur maximale que peuvent prendre les nombres générés par la fonction generateRandomList.
const boundaryMax = 1000;

/**
 * Génère une liste de nombres aléatoires.
 *
 * @param size - La taille de la liste à générer.
 * @param min - La valeur minimale possible pour les nombres aléatoires (par défaut, la valeur de boundaryMin).
 * @param max - La valeur maximale possible pour les nombres aléatoires (par défaut, la valeur de boundaryMax).
 * @returns Une liste de nombres aléatoires.
 */
export function generateRandomList(
  size: number,
  min = boundaryMin,
  max = boundaryMax
): number[] {
  // Vérifie si min est supérieur à max, auquel cas une erreur est signalée et une liste vide est retournée.
  if (min > max) {
    console.log("les valeurs de min et max sont inversées");
    return [];
  }
  // Utilise Array.from pour générer une liste de la taille spécifiée.
  // Pour chaque élément de la liste, une fonction génératrice est utilisée pour produire un nombre aléatoire dans l'intervalle [min, max].
  return Array.from(
    { length: size },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}
