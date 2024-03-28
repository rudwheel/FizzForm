import { generateRandomList, processList } from "./core";

// Définit la taille de la liste à générer
const listSize = 10;

// Génère une liste de nombres aléatoires de taille listSize
const randomList = generateRandomList(listSize);

// Affiche la liste de nombres aléatoires générée
console.log("Liste de nombres aléatoires : ", randomList);

// Traite la liste de nombres aléatoires avec la fonction processList
const results = processList(randomList);

// Affiche les résultats du traitement de la liste
console.log("Résultats du traitement de la liste : ", results);
