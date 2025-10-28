# Student Management Application

Cette application permet de gérer des étudiants via une API Spring Boot et un frontend Next.js/React.

---

## API Endpoints

### Ajouter un étudiant (POST /students/save)

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
<img width="960" height="510" alt="1" src="https://github.com/user-attachments/assets/dcd804bd-27aa-429a-9728-3050e364e515" />
