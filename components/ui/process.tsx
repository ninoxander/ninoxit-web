const STEPS = [
{ number: 1, title: "Diagnóstico", description: "Entendemos tus retos y objetivos." },
{ number: 2, title: "Diseño", description: "Creamos la propuesta visual perfecta." },
{ number: 3, title: "Desarrollo", description: "Construimos tu solución con código limpio." },
{ number: 4, title: "Implementación", description: "Lanzamos tu proyecto al mundo." },
{ number: 5, title: "Capacitación", description: "Te enseñamos a usar tus nuevas herramientas." },
];

export function ProcessSection() {
return (
    <section id="proceso" className="section-screen bg-surface py-24">
    <div className="mx-auto max-w-[1280px] px-4 md:px-10">
        <div className="mb-16 text-center">
        <h2 className="font-heading text-3xl font-semibold text-foreground">
            Tu Camino al Éxito Digital
        </h2>
        </div>

        <div className="relative flex flex-col justify-between gap-8 md:flex-row">
        <div className="absolute left-0 top-1/2 -z-10 hidden h-0.5 w-full -translate-y-1/2 bg-outline-variant md:block" />

        {STEPS.map((step) => (
            <div key={step.number} className="group flex-1 text-center">
            <div
                className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-4 bg-white text-xl font-bold transition-all group-hover:scale-110 ${
                step.number === 1
                    ? "border-primary text-primary"
                    : "border-outline-variant text-foreground/70 group-hover:border-primary group-hover:text-primary"
                }`}
            >
                {step.number}
            </div>
            <h4 className="mb-2 font-bold">{step.title}</h4>
            <p className="text-sm text-foreground/70">{step.description}</p>
            </div>
        ))}
        </div>
    </div>
    </section>
);
}