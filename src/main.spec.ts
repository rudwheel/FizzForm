// Importer les fonctions nécessaires depuis le module 'core'
import { generateRandomList, processList } from './core';

// Utiliser jest.mock pour remplacer les fonctions importées par des fonctions mockées
jest.mock('./core');

// Définir un groupe de tests pour le module 'main.ts'
describe('main.ts', () => {
  // Définir un test individuel dans ce groupe
  it('should generate a list of random numbers and process them', () => {
    // Arrange
    // Définir une liste de nombres à utiliser comme valeur de retour pour la fonction mockée 'generateRandomList'
    const mockRandomList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
    // Dire à la fonction mockée 'generateRandomList' de retourner 'mockRandomList' quand elle est appelée
    (generateRandomList as jest.Mock).mockReturnValue(mockRandomList);

    // Définir une liste de résultats à utiliser comme valeur de retour pour la fonction mockée 'processList'
    const mockResults = ["1", "2", "Geste", "4", "Forme", "Geste", "7", "8", "Geste", "Gestform"];
    // Dire à la fonction mockée 'processList' de retourner 'mockResults' quand elle est appelée
    (processList as jest.Mock).mockReturnValue(mockResults);

    // Remplacer 'console.log' par une fonction mockée pour pouvoir vérifier si elle a été appelée correctement
    console.log = jest.fn();

    // Act
    // Exécuter le module 'main.ts', qui devrait appeler 'generateRandomList' et 'processList', et afficher les résultats
    require('./main');

    // Assert
    // Vérifier que 'generateRandomList' a été appelée avec le bon argument
    expect(generateRandomList).toHaveBeenCalledWith(10);
    // Vérifier que 'processList' a été appelée avec le bon argument
    expect(processList).toHaveBeenCalledWith(mockRandomList);
    // Vérifier que 'console.log' a été appelée avec les bons arguments pour afficher la liste de nombres aléatoires
    expect(console.log).toHaveBeenCalledWith("Liste de nombres aléatoires : ", mockRandomList);
    // Vérifier que 'console.log' a été appelée avec les bons arguments pour afficher les résultats du traitement de la liste
    expect(console.log).toHaveBeenCalledWith("Résultats du traitement de la liste : ", mockResults);
  });
});