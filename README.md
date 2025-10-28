# Student Management Application

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

---

## Exemples de requêtes et captures

### Ajouter un étudiant (POST `/students/save`)
**Requête :**
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
<img width="960" height="510" alt="1" src="https://github.com/user-attachments/assets/68335431-c82f-4a7a-87bb-5832009e5d14" />


Récupérer tous les étudiants (GET /students/all)
Réponse : 200 OK

Liste complète des étudiants renvoyée
<img width="960" height="510" alt="2" src="https://github.com/user-attachments/assets/12de8a3d-55a8-4935-ab1a-c9106d90f061" />


Supprimer un étudiant (DELETE /students/delete/{id})
Réponse : 204 No Content

Étudiant supprimé avec succès

<img width="960" height="510" alt="DELET_4" src="https://github.com/user-attachments/assets/07a1814e-7e27-49ed-aff7-297bda2f5db6" />

Compter les étudiants (GET /students/count)
Réponse : 200 OK

Nombre total d’étudiants renvoyé
<img width="960" height="510" alt="3" src="https://github.com/user-attachments/assets/6c4bbaf2-5c4d-44af-94bb-e05a4a88122b" />


Répartition par année (GET /students/byYear)
Réponse : 200 OK

Répartition des étudiants par année
<img width="960" height="510" alt="byYear_5" src="https://github.com/user-attachments/assets/82cf66b5-6857-4db3-b20e-3496000dabaf" />


Swagger UI
La documentation Swagger est disponible à l’URL suivante :


http://localhost:8086/swagger-ui.html
Elle permet de visualiser et tester tous les endpoints de l’API.
<img width="960" height="510" alt="Cap_swagger" src="https://github.com/user-attachments/assets/f3dd9164-b0b2-4ab0-8222-145f10eab3d1" />


Frontend
Le frontend est développé avec Next.js et React.

Formulaire de création / édition d’étudiants

Liste des étudiants avec pagination

Connexion directe au backend via fetch API


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
<img width="640" height="340" alt="f1" src="https://github.com/user-attachments/assets/4021590d-af33-449a-80cd-b16b3b1a3cb4" />
<img width="640" height="340" alt="F2" src="https://github.com/user-attachments/assets/b759e939-c892-43f7-9a05-9f9775ee5f93" />

Notes
Assurez-vous que le backend est démarré avant d’utiliser le frontend.

Les requêtes CORS sont autorisées pour http://localhost:3022.

Le frontend utilise Vercel Analytics en mode debug pour le développement.
