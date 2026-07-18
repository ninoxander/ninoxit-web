import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TESTIMONIALS = [
  {
    quote:
      "Nuestra zapatería familiar pasó de usar cuadernos a tener un inventario digital en una semana. Ninoxit hizo que fuera increíblemente fácil.",
    name: "María Rodríguez",
    role: "Dueña, Calzado Real",
    initials: "MR",
  },
  {
    quote:
      "El sistema POS que desarrollaron para mi cafetería es más rápido y económico que cualquier opción comercial que probamos antes.",
    name: "Juan López",
    role: "Fundador, Café Central",
    initials: "JL",
  },
  {
    quote:
      "Gracias a nuestra nueva página web, ahora recibimos pedidos directos por WhatsApp, ahorrando comisiones de apps externas.",
    name: "Elena García",
    role: "Chef, Bistro Local",
    initials: "EG",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-screen bg-surface py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-10">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-semibold text-foreground">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map(({ quote, name, role, initials }) => (
            <Card key={name} className="glass-card relative rounded-2xl p-8">
              <Quote className="absolute -top-4 left-2 h-12 w-12 text-primary opacity-20" />
              <p className="mb-6 italic text-foreground/70">&ldquo;{quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-surface-container font-bold text-primary">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h5 className="font-bold">{name}</h5>
                  <p className="text-xs text-foreground/70">{role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
