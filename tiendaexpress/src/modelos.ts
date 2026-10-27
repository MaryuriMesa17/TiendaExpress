export interface Producto {
  id: string;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
}

export type EstadoPedido = 'Pendiente' | 'En proceso' | 'Entregado';

export interface Pedido {
  id: string;
  cliente: string;
  nombreProducto: string;
  cantidad: number;
  fecha: string;
  estado: EstadoPedido;
}