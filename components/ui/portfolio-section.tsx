import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Dashboard de Operaciones",
    description: "Gestión total para una cadena local de suministros.",
    image: "/portfolio-1.jpg",
    span: "md:col-span-8",
  },
  {
    title: "Sistema POS Mobile",
    description: "Ventas ágiles desde cualquier lugar.",
    image: "/portfolio-2.jpg",
    span: "md:col-span-4",
  },
  {
    title: "Landing Page Premium",
    description: "Conversión optimizada para servicios profesionales.",
    image: "/portfolio-3.jpg",
    span: "md:col-span-4",
  },
  {
    title: "Proyecto Demo Artis",
    description: "E-commerce a la medida para artesanos locales.",
    image: "/portfolio-4.jpg",
    span: "md:col-span-8",
  },
];

export function PortfolioSection() {
  return (
    <section id="casos" className="section-screen bg-surface-container-low py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-foreground">
              Proyectos que Impulsan Negocios
            </h2>
            <p className="text-foreground/70">
              Resultados reales para negocios de todos los tamaños.
            </p>
          </div>
          <Link
            href="#"
            className="group inline-flex items-center gap-2 font-bold text-primary"
          >
            Ver todos los casos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid h-auto grid-cols-1 gap-6 md:h-[600px] md:grid-cols-12">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className={`glass-card group relative overflow-hidden rounded-3xl ${project.span}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <h4 className="text-xl font-bold md:text-2xl">{project.title}</h4>
                <p className="opacity-80">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
