import Image from "next/image";
import { CheckCircle2, BadgeCheck } from "lucide-react";

const BENEFITS = [
{
title: "Atención cercana",
description: "Hablamos en tu idioma, sin tecnicismos innecesarios.",
},
{
title: "Sin letras chiquitas",
description: "Costos transparentes desde el día uno.",
},
{
title: "Soporte Local",
description: "Estamos aquí cuando nos necesites, siempre.",
},
{
title: "Escalabilidad",
description: "Crecemos al ritmo que tu negocio lo requiera.",
},
];

export function WhyUsSection() {
return (
<section className="section-screen bg-surface-container-lowest py-24">
    <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 px-4 md:px-10 lg:grid-cols-2">
    <div className="relative order-2 lg:order-1">
        <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
        <Image
            src="https://krnupwtklnxyizwnsvcs.supabase.co/storage/v1/object/public/ninoxit.com/oficina_blob.png"
            alt="Oficina moderna trabajando en un dashboard digital"
            fill
            className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
        </div>

        <div className="glass-card absolute -bottom-8 -right-8 hidden rounded-2xl p-6 shadow-xl md:block">
        <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
            <BadgeCheck className="h-6 w-6" />
            </div>
            <div>
            <p className="font-bold text-foreground">100% Personalizado</p>
            <p className="text-sm text-foreground/70">Sin plantillas genéricas</p>
            </div>
        </div>
        </div>
    </div>

    <div className="order-1 space-y-6 lg:order-2">
        <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
        Hacemos que la tecnología trabaje para tu negocio.
        </h2>

        <div className="grid grid-cols-1 gap-8 pt-4 sm:grid-cols-2">
        {BENEFITS.map(({ title, description }) => (
            <div key={title} className="flex gap-4">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
            <div>
                <h4 className="font-bold text-foreground">{title}</h4>
                <p className="text-sm text-foreground/70">{description}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
    </div>
</section>
);
}