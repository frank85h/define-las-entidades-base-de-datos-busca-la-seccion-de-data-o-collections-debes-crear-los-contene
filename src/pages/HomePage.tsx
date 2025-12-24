
import { Link } from 'react-router-dom';
import { Users, Wrench, Wind } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wind className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">HVAC Service Manager</h1>
            </div>
            <nav className="flex gap-4">
              <Link to="/clientes" className="text-muted-foreground hover:text-foreground transition-colors">
                Clientes
              </Link>
              <Link to="/servicios" className="text-muted-foreground hover:text-foreground transition-colors">
                Servicios
              </Link>
              <Link to="/equipos" className="text-muted-foreground hover:text-foreground transition-colors">
                Equipos
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Gestión Profesional de Servicios HVAC
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Administra clientes, servicios y equipos de climatización en un solo lugar
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Link to="/clientes" className="group">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Clientes</h3>
              <p className="text-muted-foreground">
                Gestiona información de clientes: nombre, dirección y teléfono
              </p>
            </div>
          </Link>

          <Link to="/servicios" className="group">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Servicios</h3>
              <p className="text-muted-foreground">
                Programa y rastrea servicios con fecha, estado y técnico asignado
              </p>
            </div>
          </Link>

          <Link to="/equipos" className="group">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Wind className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Equipos</h3>
              <p className="text-muted-foreground">
                Registra equipos con marca, modelo, gas refrigerante y fotos
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <div className="text-muted-foreground">Clientes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <div className="text-muted-foreground">Servicios Activos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <div className="text-muted-foreground">Equipos Registrados</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}