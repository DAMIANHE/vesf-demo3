import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <section className="home-text">
        <h1>VESF — Value Early Signals Framework</h1>

        <h2>Versión Institucional Financiera · DEMO</h2>

        <p className="lead">
          Framework de detección temprana de Riesgo Invisible orientado a proteger
          el Valor Actual Neto (VAN) antes de que el impacto sea visible en los
          indicadores tradicionales.
        </p>

        <p>
          VESF no explica el pasado. Proporciona un marco conceptual para
          identificar tensiones estratégicas en estado de gestación, cuando aún
          es posible actuar sin erosionar valor.
        </p>

        <Link href="/demo">
          <button className="primary">
            👉 Acceder al DEMO Institucional
          </button>
        </Link>
      </section>

      <section className="home-visual">
        <Image
          src="/vesf-home-visual.png"
          alt="VESF — detección temprana de señales estratégicas invisibles"
          fill
          priority
          style={{ objectFit: "contain" }}
        />
      </section>
    </main>
  );
}
