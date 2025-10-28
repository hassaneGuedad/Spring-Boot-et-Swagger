export const dynamic = "force-dynamic"

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8086"

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const json = await req.json()
  const res = await fetch(`${BACKEND_URL}/students/${params.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(json),
  })
  const body = await res.text()
  return new Response(body, {
    status: res.status,
    headers: {
      "Content-Type": res.headers.get("content-type") || "application/json",
    },
  })
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const res = await fetch(`${BACKEND_URL}/students/${params.id}`, { method: "DELETE" })
  const body = await res.text()
  return new Response(body, {
    status: res.status,
    headers: {
      "Content-Type": res.headers.get("content-type") || "application/json",
    },
  })
}
