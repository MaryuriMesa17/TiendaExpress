import { useState } from 'react';
import type { Producto } from './modelos';

interface Props {
  productos: Producto[];
  onAgregarPedido: (cliente: string, productoId: string, cantidad: number) => void;
}

export function FormularioPedido({ productos, onAgregarPedido }: Props) {
  const [cliente, setCliente] = useState('');
  const [productoId, setProductoId] = useState('');
  const [cantidad, setCantidad] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cliente || !productoId || !cantidad) return;

    onAgregarPedido(cliente, productoId, Number(cantidad));
    setCliente('');
    setProductoId('');
    setCantidad('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Registrar Pedido</h3>
      <input placeholder="Cliente" value={cliente} onChange={e => setCliente(e.target.value)} /><br/>
      <select value={productoId} onChange={e => setProductoId(e.target.value)}>
        <option value="">Seleccione producto</option>
        {productos.map(p => (
          <option key={p.id} value={p.id}>{p.nombre} (Stock: {p.stock})</option>
        ))}
      </select><br/>
      <input type="number" placeholder="Cantidad" value={cantidad} onChange={e => setCantidad(e.target.value)} /><br/>
      <button type="submit">Crear Pedido</button>
    </form>
  );
}