import type { Pedido, EstadoPedido } from './modelos';

interface Props {
  pedidos: Pedido[];
  onCambiarEstado: (id: string, estado: EstadoPedido) => void;
}

export function TablaPedidos({ pedidos, onCambiarEstado }: Props) {
  return (
    <div>
      <h3>Lista de Pedidos</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map(p => (
            <tr key={p.id}>
              <td>{p.cliente}</td>
              <td>{p.nombreProducto}</td>
              <td>{p.cantidad}</td>
              <td>{p.fecha}</td>
              <td>{p.estado}</td>
              <td>
                <select value={p.estado} onChange={e => onCambiarEstado(p.id, e.target.value as EstadoPedido)}>
                  <option value="Pendiente">Pendiente</option>
                  <option value="En proceso">En proceso</option>
                  <option value="Entregado">Entregado</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}