import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const nombre = formData.get("nombre");
    const apellido = formData.get("apellido");
    const email = formData.get("email");

    await resend.emails.send({
      from: "VESF DEMO <onboarding@resend.dev>",
      to: "mariohectorvogel@gmail.com",
      subject: "Nuevo interés desde DEMO VESF",
      html: `
        <h2>Nuevo lead desde DEMO VESF</h2>
        <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>Origen: DEMO institucional</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json(
      { ok: false, error: "Error enviando email" },
      { status: 500 }
    );
  }
}
