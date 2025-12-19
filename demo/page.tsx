import Radar from "../../components/Radar";
import TableVESF from "../../components/TableVESF";
import MicroPause from "../../components/MicroPause";
import Link from "next/link";

export default function Demo() {
  return (
    <main className="page">
      <h1>VEFS — Radar Estratégico de Riesgo Invisible</h1>

      <p className="intro">
        Este radar no muestra indicadores históricos. Muestra riesgos invisibles
        detectados a partir de Señales Débiles que aún no impactan en los
        reportes tradicionales, pero que ya están condicionando el valor futuro
        del negocio.
      </p>

      <section className="how-to-read">
        <h3>Cómo leer este radar</h3>
        <p>
          Cuanto más irregular y extendida es la forma del polígono, mayor es la
          dispersión de riesgos estratégicos y mayor la probabilidad de impacto
          silencioso en el VAN si no se actúa a tiempo.
        </p>
      </section>

      <Radar scenario="base" />

      <MicroPause />

      <section className="bsc-context">
        <p className="bsc-top">
          <strong>
            En la versión comercial, VESF estructura las variables de riesgo
            invisible de acuerdo con las cuatro perspectivas del Balanced
            Scorecard, permitiendo anticipar tensiones estratégicas antes de que
            impacten en los indicadores tradicionales.
          </strong>
        </p>

        <TableVESF />

        <p className="bsc-bottom">
          <strong>
            El Peso Estratégico indica relevancia; el Impacto VAN mide valor
            económico en riesgo; y el Nivel de Riesgo sintetiza la urgencia
            estratégica para la toma de decisiones del Consejo.
          </strong>
        </p>
      </section>

      <p className="van-phrase">
        Cuando el riesgo todavía no es urgente, el VAN todavía es defendible.
        Cuando se vuelve urgente, el VAN ya se perdió.
      </p>

      <Link href="/demo/escenario">
        <button className="primary">
          👉 Ver escenarios estratégicos (preview)
        </button>
      </Link>
    </main>
  );
}
