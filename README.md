<img width="960" height="510" alt="3" src="https://github.com/user-attachments/assets/ff00fe12-b1b9-4d1b-a0fa-aa97db7ae738" /># Student Management Application

## Description
Cette application est un système de gestion des étudiants.  
Elle permet de **créer, lire, supprimer et compter des étudiants**, avec un backend Spring Boot exposant une API REST et un frontend Next.js/React.

---

## Technologies utilisées
- **Backend :** Java 17, Spring Boot, Spring Data JPA, MySQL
- **Frontend :** Next.js 16, React 19, Tailwind CSS, Radix UI, React Hook Form
- **Documentation API :** Swagger / OpenAPI
- **Autres :** Maven, Vercel Analytics (front-end)

---

## API Endpoints

| Méthode | Endpoint                   | Statut | Description |
|---------|---------------------------|--------|------------|
| POST    | `/students/save`           | 201 Created | Ajouter un nouvel étudiant |
| GET     | `/students/all`            | 200 OK      | Récupérer la liste complète des étudiants |
| DELETE  | `/students/delete/{id}`    | 204 No Content | Supprimer un étudiant par ID |
| GET     | `/students/count`          | 200 OK      | Récupérer le nombre total d’étudiants |
| GET     | `/students/byYear`         | 200 OK      | Récupérer le nombre d’étudiants par année |

### Exemples de requêtes

#### Ajouter un étudiant (POST `/students/save`)
```json
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
Réponse : 201 Created

Étudiant ajouté avec succès

<img width="960" height="510" alt="1" src="https://github.com/user-attachments/assets/4f002565-c8be-4a35-9a69-99eb4b02d75f" />


Récupérer tous les étudiants (GET /students/all)
Réponse : 200 OK

Liste complète des étudiants renvoyée

<img width="960" height="510" alt="2" src="https://github.com/user-attachments/assets/c2a4a08a-036f-4a57-abaa-4a0cd211078f" />


Supprimer un étudiant (DELETE /students/delete/{id})
Réponse : 204 No Content

Étudiant supprimé avec succès
<img width="960" height="510" alt="DELET_4" src="https://github.com/user-attachments/assets/d0e5e1a1-7de8-4695-97fb-e722dbbde945" />


Compter les étudiants (GET /students/count)
Réponse : 200 OK

Nombre total d’étudiants renvoyé

<img width="960" height="510" alt="3" src="https://github.com/user-attachments/assets/6ad874dd-e441-4e01-a2c1-7ba5684b5c60" />

Répartition par année (GET /students/byYear)
Réponse : 200 OK

Répartition des étudiants par année

<img width="960" height="510" alt="byYear_5" src="https://github.com/user-attachments/assets/4aa2f7d0-19d5-49ca-82a7-ad0c609cf8f0" />


Swagger UI
La documentation Swagger est disponible à l’URL suivante :


http://localhost:8086/swagger-ui.html
Elle permet de visualiser et tester tous les endpoints de l’API.

<img width="960" height="510" alt="Cap_swagger" src="https://github.com/user-attachments/assets/8b399aed-8f78-49b5-ae69-a43ebc76b059" />

Frontend
Le frontend est développé avec Next.js et React.

Formulaire de création / édition d’étudiants

Liste des étudiants avec pagination

Connexion en direct au backend via fetch API

<img width="640" height="340" alt="f1" src="https://github.com/user-attachments/assets/83d23152-3872-4eb4-9ef1-504005066e1e" />

<img width="640" height="340" alt="F2" src="https://github.com/user-attachments/assets/c623d86a-8328-4867-a620-0ce13b742f1e" />


Démarrage
Backend

mvn clean install -DskipTests
mvn spring-boot:run
L’API sera disponible sur : http://localhost:8086

Frontend

cd front-end
npm install
npm run dev
L’interface sera disponible sur : http://localhost:3022

Notes
Assurez-vous que le backend est démarré avant d’utiliser le frontend.

Les requêtes CORS sont autorisées pour http://localhost:3022.

Le frontend utilise Vercel Analytics en mode debug pour le développement.


