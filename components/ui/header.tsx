import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
{ href: "#servicios", label: "Servicios" },
{ href: "#proceso", label: "Proceso" },
{ href: "#casos", label: "Casos" },
];

export function SiteHeader() {
return (
<header className="fixed top-0 z-50 w-full border-b border-outline/10 bg-white/70 shadow-sm backdrop-blur-xl">
    <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-4 md:px-10">
    <div className="flex items-center gap-3">
        <Image
        src="/logo.png"
        alt="Ninoxit Logo"
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
        />
        <span className="font-heading text-2xl font-bold text-primary">
        Ninoxit
        </span>
    </div>

    <div className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
        <Link
            key={link.href}
            href={link.href}
            className="text-foreground/70 transition-colors duration-300 hover:text-primary"
        >
            {link.label}
        </Link>
        ))}
        <Button asChild className="cta-gradient rounded-full px-6 font-semibold">
        <Link href="#contacto">Agenda una llamada</Link>
        </Button>
    </div>

    <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-6 w-6" />
    </Button>
    </nav>
</header>
);
}