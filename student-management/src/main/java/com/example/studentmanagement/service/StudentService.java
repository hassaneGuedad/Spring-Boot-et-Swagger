package com.example.studentmanagement.service;

import com.example.studentmanagement.entity.Student;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class StudentService {

    private final List<Student> students = new ArrayList<>();

    public Student save(Student student) {
        students.add(student);
        return student;
    }

    public boolean delete(int id) {
        return students.removeIf(s -> s.getId() == id);
    }

    public List<Student> findAll() {
        return students;
    }

    public List<Student> getStudentsPaginated(int page, int size) {
        int start = page * size;
        int end = Math.min(start + size, students.size());
        if (start > end) return new ArrayList<>();
        return students.subList(start, end);
    }

    public long countStudents() {
        return students.size();
    }

    public Collection<?> findNbrStudentByYear() {
        // Exemple: retourne un tableau avec année et nombre (statique ici)
        return List.of(
                new Object() { public final int year = 2025; public final int count = 10; },
                new Object() { public final int year = 2026; public final int count = 5; }
        );
    }
}
