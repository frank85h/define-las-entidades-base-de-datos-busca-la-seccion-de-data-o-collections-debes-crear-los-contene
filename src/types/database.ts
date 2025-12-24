
// Database entity types for HVAC Service Management

export interface Cliente {
  id: string;
  nombre: string;
  direccion: string;
  telefono: string;
  created_at: string;
  updated_at: string;
}

export interface Servicio {
  id: string;
  fecha: string;
  estado: 'pendiente' | 'en_progreso' | 'completado' | 'cancelado';
  tecnico: string;
  cliente_id: string;
  cliente?: Cliente;
  created_at: string;
  updated_at: string;
}

export interface Equipo {
  id: string;
  marca: string;
  modelo: string;
  gas_refrigerante: string;
  foto_url?: string;
  cliente_id: string;
  cliente?: Cliente;
  created_at: string;
  updated_at: string;
}