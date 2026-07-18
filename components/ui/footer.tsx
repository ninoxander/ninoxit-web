import Image from "next/image";
import Link from "next/link";
import { Globe, AtSign } from "lucide-react";

const LINK_GROUPS = [
  {
    title: "Enlaces",
    links: [
      { href: "#servicios", label: "Servicios" },
      { href: "#proceso", label: "Proceso" },
      { href: "#casos", label: "Casos de Éxito" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacidad" },
      { href: "#", label: "Términos" },
      { href: "#", label: "Cookies" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface pb-8 pt-16">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-4 md:grid-cols-4 md:px-10">
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Ninoxit Logo" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="font-heading text-xl font-bold text-foreground">Ninoxit</span>
          </div>
          <p className="text-sm text-foreground/70">
            Empoderando a pequeños negocios locales con tecnología de clase mundial.
          </p>
        </div>

        {LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <h5 className="mb-4 font-bold text-foreground">{group.title}</h5>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 transition-all hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h5 className="mb-4 font-bold text-foreground">Social</h5>
          <div className="flex gap-4">
            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-primary transition-transform hover:scale-110"
            >
              <Globe className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-primary transition-transform hover:scale-110"
            >
              <AtSign className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1280px] border-t border-outline/10 px-4 pt-4 text-center md:px-10 md:text-left">
        <p className="text-sm text-foreground/70">
          © {new Date().getFullYear()} Ninoxit. Transformación Digital con propósito.
        </p>
      </div>
    </footer>
  );
}