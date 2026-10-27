import { useState } from 'react';
import type { Producto } from './modelos';

interface Props {
  onAgregar: (p: Producto) => void;
}

export function FormularioProducto({ onAgregar }: Props) {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !categoria || !precio || !stock) return;

    onAgregar({
      id: Date.now().toString(),
      nombre,
      categoria,
      precio: Number(precio),
      stock: Number(stock)
    });

    setNombre('');
    setCategoria('');
    setPrecio('');
    setStock('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Registrar Producto</h3>
      <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} /><br/>
      <input placeholder="Categoría" value={categoria} onChange={e => setCategoria(e.target.value)} /><br/>
      <input type="number" placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)} /><br/>
      <input type="number" placeholder="Stock" value={stock} onChange={e => setStock(e.target.value)} /><br/>
      <button type="submit">Guardar Producto</button>
    </form>
  );
}