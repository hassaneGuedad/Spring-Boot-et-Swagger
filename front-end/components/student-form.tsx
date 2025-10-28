"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"

interface StudentFormProps {
  onSuccess: (student?: any) => void
  onCancel: () => void
  editingStudent?: any
}

export function StudentForm({ onSuccess, onCancel, editingStudent }: StudentFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const API_URL = "http://localhost:8086"

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        firstName: editingStudent.firstName || "",
        lastName: editingStudent.lastName || "",
        email: editingStudent.email || "",
        phone: editingStudent.phone || "",
        address: editingStudent.address || "",
        city: editingStudent.city || "",
        postalCode: editingStudent.postalCode || "",
        country: editingStudent.country || "",
      })
    }
  }, [editingStudent])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    try {
      setLoading(true)

      const method = editingStudent ? "PUT" : "POST";
      const url = editingStudent ? `${API_URL}/students/${editingStudent.id}` : `${API_URL}/students/save`;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(editingStudent ? "Erreur lors de la mise à jour" : "Erreur lors de la création");
      }

      // parse the created/updated student returned by the API and pass it to onSuccess
      const data = await response.json();
      onSuccess(data)

    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">
        {editingStudent ? "Modifier l'étudiant" : "Ajouter un nouvel étudiant"}
      </h2>

      {error && (
        <div className="bg-destructive/10 border border-destructive text-destructive p-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Prénom *</label>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="Jean"
            className="border-border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Nom *</label>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Dupont"
            className="border-border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="jean@example.com"
            className="border-border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Téléphone *</label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+33 6 12 34 56 78"
            className="border-border"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-foreground mb-1">Adresse *</label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="123 Rue de la Paix"
            className="border-border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Ville *</label>
          <Input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            placeholder="Paris"
            className="border-border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Code Postal *</label>
          <Input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
            placeholder="75001"
            className="border-border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Pays *</label>
          <Input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            placeholder="France"
            className="border-border"
          />
        </div>
      </div>

      <div className="flex gap-3 justify-end pt-4">
        <Button
          type="button"
          onClick={onCancel}
          variant="outline"
          className="border-border bg-transparent"
          disabled={loading}
        >
          Annuler
        </Button>
        <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {editingStudent ? "Mise à jour..." : "Création..."}
            </>
          ) : editingStudent ? (
            "Mettre à jour"
          ) : (
            "Créer"
          )}
        </Button>
      </div>
    </form>
  )
}

// Exemple usage dans le parent (no filepath)
// const [students, setStudents] = useState<any[]>([])

// function handleSuccess(createdStudent) {
//   // préfixer pour afficher en haut
//   setStudents(prev => [createdStudent, ...prev])
//   // fermer le formulaire si besoin
//   // setShowForm(false)
// }

// <StudentForm onSuccess={handleSuccess} onCancel={...} />
