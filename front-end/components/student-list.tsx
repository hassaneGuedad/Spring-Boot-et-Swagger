"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Loader2, Trash2, Edit2 } from "lucide-react"

interface Student {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  postalCode: string
  country: string
}

interface StudentListProps {
  refreshTrigger: number
  onEdit: (student: Student) => void
  onDelete: () => void
}

export function StudentList({ refreshTrigger, onEdit, onDelete }: StudentListProps) {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null)
  const [deleting, setDeleting] = useState(false)

  const API_URL = "http://localhost:8086"

  useEffect(() => {
    fetchStudents()
  }, [page, refreshTrigger])

  const fetchStudents = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(`${API_URL}/students?page=${page}&size=10`)

      if (!response.ok) {
        throw new Error("Erreur lors du chargement des étudiants")
      }

      const data = await response.json()
      setStudents(data._embedded?.students || [])
      setTotalPages(data.page?.totalPages || 0)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue")
      setStudents([])
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      setDeleting(true)
      const response = await fetch(`${API_URL}/students/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression")
      }

      setDeleteConfirm(null)
      onDelete()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de la suppression")
    } finally {
      setDeleting(false)
    }
  }

  if (loading && students.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {error && (
        <div className="bg-destructive/10 border border-destructive text-destructive p-4 rounded-lg">{error}</div>
      )}

      {students.length === 0 ? (
        <Card className="p-8 text-center border border-border">
          <p className="text-muted-foreground">Aucun étudiant trouvé</p>
        </Card>
      ) : (
        <div className="grid gap-4">
          {students.map((student) => (
            <Card key={student.id} className="p-6 border border-border hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {student.firstName} {student.lastName}
                  </h3>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div>
                      <span className="font-medium text-foreground">Email:</span> {student.email}
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Téléphone:</span> {student.phone}
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Adresse:</span> {student.address}
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Ville:</span> {student.city}
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Code Postal:</span> {student.postalCode}
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Pays:</span> {student.country}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(student)}
                    className="border-border hover:bg-secondary"
                  >
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDeleteConfirm(student.id)}
                    className="border-destructive text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          <Button
            onClick={() => setPage(Math.max(0, page - 1))}
            disabled={page === 0}
            variant="outline"
            className="border-border"
          >
            Précédent
          </Button>
          <div className="flex items-center px-4 text-sm text-muted-foreground">
            Page {page + 1} sur {totalPages}
          </div>
          <Button
            onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
            disabled={page >= totalPages - 1}
            variant="outline"
            className="border-border"
          >
            Suivant
          </Button>
        </div>
      )}

      <AlertDialog open={deleteConfirm !== null} onOpenChange={(open) => !open && setDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
            <AlertDialogDescription>
              Êtes-vous sûr de vouloir supprimer cet étudiant ? Cette action ne peut pas être annulée.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex gap-2 justify-end">
            <AlertDialogCancel className="border-border">Annuler</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteConfirm !== null && handleDelete(deleteConfirm)}
              disabled={deleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleting ? "Suppression..." : "Supprimer"}
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
