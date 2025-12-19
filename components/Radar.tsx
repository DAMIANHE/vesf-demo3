"use client";

import {
  RadarChart,
  Radar as RadarShape,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts";

const dataSets: Record<string, any[]> = {
  conservador: [
    { subject: "Finanzas", value: 2 },
    { subject: "Clientes", value: 2 },
    { subject: "Procesos", value: 1 },
    { subject: "Aprendizaje", value: 1 }
  ],
  base: [
    { subject: "Finanzas", value: 3 },
    { subject: "Clientes", value: 3 },
    { subject: "Procesos", value: 2 },
    { subject: "Aprendizaje", value: 2 }
  ],
  tension: [
    { subject: "Finanzas", value: 4 },
    { subject: "Clientes", value: 4 },
    { subject: "Procesos", value: 3 },
    { subject: "Aprendizaje", value: 3 }
  ]
};

export default function Radar({ scenario }: { scenario: string }) {
  return (
    <div style={{ width: "100%", height: 420 }}>
      <ResponsiveContainer>
        <RadarChart data={dataSets[scenario]}>
          <PolarGrid stroke="#444" />
          <PolarAngleAxis dataKey="subject" stroke="#ddd" />
          <RadarShape
            dataKey="value"
            stroke="#ff4d4f"
            fill="#ff4d4f"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
