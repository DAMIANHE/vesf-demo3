"use client";

import { useState } from "react";
import Radar from "@/components/Radar";
import ScenarioSelector from "@/components/ScenarioSelector";
import Link from "next/link";

export default function Escenario() {
  const [scenario, setScenario] = useState("base");

  return (
    <main className="page">
      <h1>Escenarios Estratégicos (Preview)</h1>

      <p className="intro">
        En este DEMO, VESF permite visualizar impactos estimados de VAN bajo
        distintos escenarios estratégicos. Los cálculos, ponderaciones y modelos
        internos forman parte del motor propietario de la versión comercial.
      </p>

      <ScenarioSelector current={scenario} onChange={setScenario} />

      <Radar scenario={scenario} />

      <div className="blocked">
        ⚠️ Funcionalidad completa disponible en versión comercial.
      </div>

      <Link href="/demo/impacto-van">
        <button className="primary">
          👉 Ver impacto estimado en VAN
        </button>
      </Link>
    </main>
  );
}
