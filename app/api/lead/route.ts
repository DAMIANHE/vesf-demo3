import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  // Captura invisible: no se almacena ni se expone
  // Preparado para integración futura (CRM / Email / DB)

  return NextResponse.json({ ok: true });
}
