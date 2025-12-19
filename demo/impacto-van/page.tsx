import PDFPreviewButton from "@/components/PDFPreviewButton";
import Link from "next/link";

export default function ImpactoVAN() {
  return (
    <main className="page">
      <h1>Impacto Estimado sobre el VAN</h1>

      <div className="impact-van">
        <div className="van-value">–3,2 %</div>
        <div className="semaphore red">Riesgo elevado</div>
      </div>

      <p>
        Este valor representa una estimación agregada del impacto potencial sobre
        el VAN, construida a partir de señales tempranas. No constituye un
        cálculo financiero formal.
      </p>

      <PDFPreviewButton />

      <Link href="/demo/cierre">
        <button className="primary">👉 Continuar</button>
      </Link>
    </main>
  );
}
