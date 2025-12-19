"use client";

export default function PDFPreviewButton() {
  return (
    <div className="pdf-preview">
      <button
        onClick={() =>
          alert(
            "Exportación avanzada disponible en la versión comercial de VESF."
          )
        }
      >
        📄 Exportar PDF (impacto estimado)
      </button>

      <p className="pdf-note">
        La exportación completa con escenarios, ponderaciones y trazabilidad
        forma parte del módulo comercial.
      </p>
    </div>
  );
}
