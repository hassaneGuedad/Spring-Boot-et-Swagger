"use client"

import { useState } from "react"
import { StudentList } from "@/components/student-list"
import { StudentForm } from "@/components/student-form"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  const [showForm, setShowForm] = useState(false)
  const [refreshTrigger, setRefreshTrigger] = useState(0)
  const [editingStudent, setEditingStudent] = useState(null)

  const handleStudentAdded = () => {
    setShowForm(false)
    setEditingStudent(null)
    setRefreshTrigger((prev) => prev + 1)
  }

  const handleEdit = (student: any) => {
    setEditingStudent(student)
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setEditingStudent(null)
  }

  return (
    <main className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Gestion des Étudiants</h1>
            <p className="text-muted-foreground mt-2">Gérez la liste complète des étudiants</p>
          </div>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {showForm ? "Annuler" : "+ Ajouter un étudiant"}
          </Button>
        </div>

        {showForm && (
          <Card className="mb-8 p-6 border border-border">
            <StudentForm onSuccess={handleStudentAdded} onCancel={handleCloseForm} editingStudent={editingStudent} />
          </Card>
        )}

        <StudentList
          refreshTrigger={refreshTrigger}
          onEdit={handleEdit}
          onDelete={() => setRefreshTrigger((prev) => prev + 1)}
        />
      </div>
    </main>
  )
}
