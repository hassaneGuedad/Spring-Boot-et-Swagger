package com.example.studentmanagement.controller;

import com.example.studentmanagement.entity.Student;
import com.example.studentmanagement.service.StudentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/students")
@Tag(name = "Student Controller", description = "Gestion des étudiants")
@CrossOrigin(origins = "http://localhost:3022") // autorise ton front
public class StudentController {

    @Autowired
    private StudentService studentService;

    @Operation(summary = "Ajouter un étudiant")
    @PostMapping("/save")
    public ResponseEntity<Student> save(@RequestBody Student student) {
        return new ResponseEntity<>(studentService.save(student), HttpStatus.CREATED);
    }

    @Operation(summary = "Supprimer un étudiant par ID")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") int id) {
        return studentService.delete(id) ?
                new ResponseEntity<>(HttpStatus.NO_CONTENT) :
                new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @Operation(summary = "Récupérer tous les étudiants")
    @GetMapping("/all")
    public ResponseEntity<List<Student>> findAll() {
        return new ResponseEntity<>(studentService.findAll(), HttpStatus.OK);
    }

    @Operation(summary = "Récupérer les étudiants paginés")
    @GetMapping
    public ResponseEntity<List<Student>> getStudentsPaginated(
            @RequestParam int page,
            @RequestParam int size) {
        return new ResponseEntity<>(studentService.getStudentsPaginated(page, size), HttpStatus.OK);
    }

    @Operation(summary = "Compter le nombre total d'étudiants")
    @GetMapping("/count")
    public ResponseEntity<Long> countStudent() {
        return new ResponseEntity<>(studentService.countStudents(), HttpStatus.OK);
    }

    @Operation(summary = "Récupérer le nombre d'étudiants par année")
    @GetMapping("/byYear")
    public ResponseEntity<Collection<?>> findByYear() {
        return new ResponseEntity<>(studentService.findNbrStudentByYear(), HttpStatus.OK);
    }
}
