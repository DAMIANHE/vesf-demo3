export default function Cierre() {
  return (
    <main className="page">
      <h1>Transición Comercial</h1>

      <p className="intro">
        VESF no reemplaza los estados financieros ni los indicadores
        tradicionales. Los complementa.
      </p>

      <p>
        Su valor está en reducir sorpresas estratégicas, permitiendo al
        Directorio anticipar escenarios, priorizar acciones y proteger el VAN
        antes de que el impacto sea irreversible.
      </p>

      <p>
        La ventaja competitiva no está en reaccionar rápido, sino en ver antes.
      </p>

      <form method="POST" action="/api/lead" className="lead-form">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          required
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <button type="submit" className="primary">
          Solicitar versión comercial / Simulación con datos reales
        </button>
      </form>
    </main>
  );
}
