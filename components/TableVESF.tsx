export default function TableVESF() {
  return (
    <table className="vesf-table">
      <thead>
        <tr>
          <th>Perspectiva</th>
          <th>Variable estratégica</th>
          <th>Peso estratégico</th>
          <th>Impacto VAN</th>
          <th>Nivel de riesgo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Financiera</td>
          <td>Exposición implícita a FX</td>
          <td>Alto</td>
          <td>Estimado</td>
          <td>Alto</td>
        </tr>
        <tr>
          <td>Clientes</td>
          <td>Elasticidad de demanda latente</td>
          <td>Medio</td>
          <td>Estimado</td>
          <td>Medio</td>
        </tr>
        <tr>
          <td>Procesos internos</td>
          <td>Dependencia operativa crítica</td>
          <td>Alto</td>
          <td>Estimado</td>
          <td>Alto</td>
        </tr>
        <tr>
          <td>Aprendizaje y crecimiento</td>
          <td>Capacidad de absorción estratégica</td>
          <td>Medio</td>
          <td>Estimado</td>
          <td>Medio</td>
        </tr>
      </tbody>
    </table>
  );
}
