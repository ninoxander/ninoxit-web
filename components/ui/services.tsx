import Link from "next/link";
import {
Globe,
Terminal,
ShoppingCart,
Nfc,
ShieldCheck,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const SERVICES = [
{
icon: Globe,
title: "Páginas Web",
description:
    "Sitios rápidos, optimizados para móviles y diseñados para convertir visitantes en clientes reales.",
color: "bg-primary/10 group-hover:bg-primary",
},
{
icon: Terminal,
title: "Software",
description:
    "Automatizamos tus procesos manuales con software a la medida que resuelve tus problemas específicos.",
color: "bg-secondary/10 group-hover:bg-secondary",
},
{
icon: ShoppingCart,
title: "Punto de Venta",
description:
    "Sistemas POS intuitivos para que gestiones tus ventas e inventario sin complicaciones técnicas.",
color: "bg-accent/10 group-hover:bg-accent",
},
{
icon: Nfc,
title: "NFC",
description:
    "Menús digitales y tarjetas de presentación inteligentes. El futuro del contacto físico es digital.",
color: "bg-primary/10 group-hover:bg-primary",
},
{
icon: ShieldCheck,
title: "Seguridad",
description:
    "Protegemos tus datos y los de tus clientes con los estándares más altos de la industria.",
color: "bg-secondary/10 group-hover:bg-secondary",
},
];

export function ServicesSection() {
return (
<section id="servicios" className="section-screen bg-surface py-24">
    <div className="mx-auto max-w-[1280px] px-4 md:px-10">
    <div className="mb-16 text-center">
        <h2 className="font-heading text-3xl font-semibold text-foreground">
        Nuestras Soluciones
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
        Tecnología de punta adaptada al tamaño y ritmo de tu negocio.
        </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, description, color }) => (
        <Card
            key={title}
            className="glass-card group rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
        >
            <div
            className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${color} group-hover:text-white`}
            >
            <Icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-heading text-xl font-semibold">
            {title}
            </h3>
            <p className="text-sm text-foreground/70">{description}</p>
        </Card>
        ))}

        <Card className="flex flex-col items-center justify-center rounded-xl bg-primary p-6 text-center text-white">
        <h3 className="mb-4 font-heading text-xl font-semibold">
            ¿Necesitas algo más?
        </h3>
        <p className="mb-6 text-sm opacity-90">
            Platícanos tu idea y encontraremos la forma técnica de hacerla
            realidad.
        </p>
        <Link
            href="#contacto"
            className="rounded-full bg-white px-6 py-2 font-bold text-primary"
        >
            Consultar
        </Link>
        </Card>
    </div>
    </div>
</section>
);
}