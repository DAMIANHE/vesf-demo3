import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VESF — DEMO Institucional",
  description:
    "Framework institucional de detección temprana de riesgos estratégicos invisibles."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
