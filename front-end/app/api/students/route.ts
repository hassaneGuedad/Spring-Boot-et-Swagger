export const dynamic = "force-dynamic"

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8086"

export async function GET(req: Request) {
  const { search } = new URL(req.url)
  const res = await fetch(`${BACKEND_URL}/students${search}`, { cache: "no-store" })
  const body = await res.text()
  return new Response(body, {
    status: res.status,
    headers: {
      "Content-Type": res.headers.get("content-type") || "application/json",
    },
  })
}

export async function POST(req: Request) {
  const json = await req.json()
  const res = await fetch(`${BACKEND_URL}/students`, {
    method: "POST",
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
