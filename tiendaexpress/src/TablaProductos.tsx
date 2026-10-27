import type { Producto } from './modelos';

interface Props {
  productos: Producto[];
}

export function TablaProductos({ productos }: Props) {
  return (
    <div>
      <h3>Lista de Productos</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(p => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>{p.categoria}</td>
              <td>{p.precio}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}