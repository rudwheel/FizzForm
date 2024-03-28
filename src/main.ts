import { generateRandomList} from './core';

// Définit la taille de la liste à générer
const listSize = 10;


// Génère une liste de nombres aléatoires de taille listSize
const randomList = generateRandomList(listSize); 

// Affiche la liste de nombres aléatoires générée
console.log("Liste de nombres aléatoires : ", randomList);