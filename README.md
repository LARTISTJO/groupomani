Bienvenue sur Groupomania

Ceci est le MVP  du 7ème projet de la formation développeur web avec OpenClassrooms.

Pour ce projet Node.js, Sequelize, Mysql et Vue.js ont été utilisés.


Installation

BDD 📒

Premièrement vous devez cloner le projet, ensuite paramétrer la base de données.

Mysql doit être installé sur votre ordinateur.

L'username et le mot de passe sont root par défaut vous devrez les  modifier dans le fichier config.json en fonction des votres. 


Backend 📁

Si vous ne l'avez pas, installez Node.js, placez-vous en ligne de commandes dans le dossier backend ensuite:

npm install

npx sequelize-cli db:create

npx sequelize-cli db:migrate

npm start


Frontend 💻

Si vous ne l'avez pas, installez Node.js, placez-vous en ligne de commandes dans le dossier frontend ensuite:

npm install

npm run serve

Ensuite deux liens vous seront proposés, cliquer sur le premier lien ou il est écrit Local.

En créant un utilisateur et en mettant isAdmin sur 1 au sein de la BDD vous donnerez à une personne les droits admin, 
ainsi elle pourra supprimer les posts et commentaires de tous les utilisateurs.
