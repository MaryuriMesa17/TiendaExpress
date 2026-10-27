import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import type { Producto, Pedido, EstadoPedido } from './modelos';
import { FormularioProducto } from './FormularioProducto';
import { FormularioPedido } from './FormularioPedido';
import { TablaProductos } from './TablaProductos';
import { TablaPedidos } from './TablaPedidos';

function App() {
  const [productos, setProductos] = useState<Producto[]>([
    { id: '1', nombre: 'Camisa', categoria: 'Ropa', precio: 30000, stock: 10 }
  ]);
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  const agregarProducto = (nuevo: Producto) => {
    setProductos([...productos, nuevo]);
  };

  const agregarPedido = (cliente: string, productoId: string, cantidad: number) => {
    const prod = productos.find(p => p.id === productoId);
    if (!prod || prod.stock < cantidad) return;

    // Descontar stock
    setProductos(productos.map(p => p.id === productoId ? { ...p, stock: p.stock - cantidad } : p));

    const nuevoPedido: Pedido = {
      id: Date.now().toString(),
      cliente,
      nombreProducto: prod.nombre,
      cantidad,
      fecha: new Date().toLocaleDateString(),
      estado: 'Pendiente'
    };

    setPedidos([...pedidos, nuevoPedido]);
  };

  const cambiarEstado = (id: string, estado: EstadoPedido) => {
    setPedidos(pedidos.map(p => p.id === id ? { ...p, estado } : p));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Tienda Express</h1>
      <FormularioProducto onAgregar={agregarProducto} />
      <hr />
      <FormularioPedido productos={productos} onAgregarPedido={agregarPedido} />
      <hr />
      <TablaProductos productos={productos} />
      <hr />
      <TablaPedidos pedidos={pedidos} onCambiarEstado={cambiarEstado} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);