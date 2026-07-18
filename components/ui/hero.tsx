import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
return (
<section className="section-screen relative overflow-hidden pt-20">
    {/* Fondo ambiental (reemplaza el canvas WebGL del HTML original) */}
    <div
    aria-hidden
    className="pointer-events-none absolute inset-0 opacity-40"
    style={{
        background:
        "radial-gradient(circle at 20% 30%, #3525cd 0%, transparent 45%), radial-gradient(circle at 80% 70%, #712ae2 0%, transparent 45%), radial-gradient(circle at 50% 50%, #00f0ff 0%, transparent 35%)",
        filter: "blur(60px)",
    }}
    />

    <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-4 md:px-10 lg:grid-cols-2">
    <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Transformación Digital Local
        </span>
        </div>

        <h1 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl">
        <span className="hero-gradient-text">Digitalizamos</span> pequeños
        negocios.
        </h1>

        <p className="max-w-lg text-foreground/70">
        Ayudamos a pequeños negocios a verse tan profesionales como las
        grandes empresas mediante tecnología sencilla, robusta y
        accesible.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
        <Button asChild size="lg" className="cta-gradient group rounded-xl text-lg font-bold">
            <Link href="#contacto">
            Agenda una llamada
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
        </Button>
        <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-xl border-outline-variant bg-white/50 font-semibold backdrop-blur-md hover:bg-white"
        >
            <Link href="#servicios">Ver Soluciones</Link>
        </Button>
        </div>
    </div>

    {/* Blob decorativo (placeholder del icosaedro 3D) */}
    <div className="relative hidden h-[400px] items-center justify-center md:flex md:h-[600px]">
        <div className="h-72 w-72 animate-[spin_20s_linear_infinite] rounded-[40%] border-2 border-primary/40 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm" />
    </div>
    </div>
</section>
);
}