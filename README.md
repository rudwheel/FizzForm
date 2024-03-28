# FizzForm

FizzForm est une application conçue pour générer une liste aléatoire de nombres entiers (10 par défaut) compris entre -1000 et 1000. Pour chaque nombre de la liste, l'application effectue les opérations suivantes :

- Si le nombre est divisible par 3 : affiche "Geste".
- Si le nombre est divisible par 5 : affiche "Forme".
- Si le nombre est divisible à la fois par 3 et par 5 : affiche "Gestform".
- Sinon, affiche le nombre lui-même.

## Utilisation

FizzForm utilise :

- **Jest** comme moteur de tests unitaires et de génération de rapports.
- **ts-node** pour la conversion de TypeScript en JavaScript.
- **Prettier & ESLint** pour un code plus propre.
- **Stryker** comme moteur de tests de mutation.

## Installation

Pour installer les dépendances, exécutez :


> npm i


## Lancement du programme

Pour exécuter le programme :


> npm start

## Exécution des tests

Pour exécuter les tests unitaires :


> npm test

## Couverture de code

La couverture de code est automatiquement générée avec `npm test`. Un rapport est directement affiché dans la console. Le rapport HTML peut être trouvé dans `reports/coverage/lcov-report/index.html`.

## Tests de mutation

Pour exécuter les tests de mutation :


> npm run test:mutation


Il est nécessaire que les tests soient au vert pour effectuer les tests de mutation.

Le rapport de mutation sera situé dans `reports/mutation/index.html`.