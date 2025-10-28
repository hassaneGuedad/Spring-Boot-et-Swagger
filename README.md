🎓 Student Management Application


🧾 Présentation
Cette application est un système complet de gestion des étudiants. Elle permet de créer, lister, supprimer et compter les étudiants via une API REST développée en Spring Boot, avec une interface utilisateur moderne construite avec Next.js et React.

🛠️ Technologies utilisées
Backend
Java 17

Spring Boot

Spring Data JPA

MySQL

Swagger / OpenAPI (documentation)

Maven

Frontend
Next.js 16

React 19

Tailwind CSS

Radix UI

React Hook Form

Vercel Analytics (mode debug)

📡 API REST — Endpoints
Méthode	Endpoint	Statut	Description
POST	/students/save	201 Created	Ajouter un nouvel étudiant
GET	/students/all	200 OK	Récupérer la liste complète des étudiants
DELETE	/students/delete/{id}	204 No Content	Supprimer un étudiant par ID
GET	/students/count	200 OK	Obtenir le nombre total d’étudiants
GET	/students/byYear	200 OK	Répartition des étudiants par année
📬 Exemples de requêtes
➕ Ajouter un étudiant
json
POST /students/save
{
  "firstName": "Jean",
  "lastName": "Dupont",
  "email": "jean@example.com",
  "phone": "+33 6 12 34 56 78",
  "address": "123 Rue de la Paix",
  "city": "Paris",
  "postalCode": "75001",
  "country": "France"
}
Réponse : 201 Created — Étudiant ajouté avec succès 📸 <img width="960" height="510" alt="1" src="https://github.com/user-attachments/assets/fe14964f-914f-4905-8191-68959395ffa4" />


📄 Récupérer tous les étudiants
http
GET /students/all
Réponse : 200 OK — Liste complète renvoyée 📸 <img width="960" height="510" alt="2" src="https://github.com/user-attachments/assets/3eb096a5-6796-415f-a735-9b047e0dbac8" />


🗑️ Supprimer un étudiant
http
DELETE /students/delete/{id}
Réponse : 204 No Content — Étudiant supprimé 📸 <img width="960" height="510" alt="DELET_4" src="https://github.com/user-attachments/assets/88f5a945-194a-4d4d-a284-f04ebe57c113" />


🔢 Compter les étudiants
http
GET /students/count
Réponse : 200 OK — Nombre total renvoyé 📸 <img width="960" height="510" alt="3" src="https://github.com/user-attachments/assets/a0e99736-0ce6-4e7f-81ed-c7e36df49a1b" />


📊 Répartition par année
http
GET /students/byYear
Réponse : 200 OK — Statistiques par année 📸 <img width="960" height="510" alt="byYear_5" src="https://github.com/user-attachments/assets/a2276047-3c5d-4084-a0fb-67df6417831c" />


📚 Documentation Swagger
La documentation interactive de l’API est disponible à l’adresse suivante : http://localhost:8086/swagger-ui.html Elle permet de visualiser et tester tous les endpoints.

📸 <img width="960" height="510" alt="Cap_swagger" src="https://github.com/user-attachments/assets/c33db5ef-5a76-4f04-850c-2c431fc3bf14" />


🖥️ Frontend
L’interface utilisateur est développée avec Next.js et React. Elle inclut :

Formulaire de création / édition d’étudiants

Liste paginée des étudiants

Connexion directe au backend via fetch API

📸 <img width="640" height="340" alt="f1" src="https://github.com/user-attachments/assets/c0d4f17d-5c60-41b0-88ac-8eb21c385f1c" />

<img width="640" height="340" alt="F2" src="https://github.com/user-attachments/assets/30f72de5-b9e2-489c-9bec-2ccd271c420a" />


🚀 Démarrage du projet
Backend

mvn clean install -DskipTests
mvn spring-boot:run
Accès à l’API : http://localhost:8086

Frontend

cd front-end
npm install
npm run dev
Accès à l’interface : http://localhost:3022

📝 Notes importantes
Le backend doit être démarré avant le frontend.

Les requêtes CORS sont autorisées pour http://localhost:3022.

Le frontend utilise Vercel Analytics en mode debug pour le développement.
