"use client";

type Props = {
  current: string;
  onChange: (scenario: string) => void;
};

export default function ScenarioSelector({ current, onChange }: Props) {
  const scenarios = [
    { key: "conservador", label: "Conservador" },
    { key: "base", label: "Base" },
    { key: "tension", label: "Tensión" }
  ];

  return (
    <div className="scenario-selector">
      {scenarios.map((s) => (
        <button
          key={s.key}
          className={current === s.key ? "active" : ""}
          onClick={() => onChange(s.key)}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
