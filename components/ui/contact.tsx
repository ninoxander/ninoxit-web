"use client";

import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export function ContactSection() {
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();
// TODO: conectar a tu endpoint / server action
}

return (
<section id="contacto" className="section-screen relative overflow-hidden py-24">
    <div
    aria-hidden
    className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
    />
    <div
    aria-hidden
    className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
    />

    <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 gap-16 px-4 md:px-10 lg:grid-cols-2">
    <div className="space-y-6">
        <h2 className="font-heading text-3xl font-semibold text-foreground md:text-5xl">
        ¿Listo para dar el gran paso digital?
        </h2>
        <p className="text-foreground/70">
        Estamos ansiosos por conocer tu negocio y ayudarte a crecer.
        Contáctanos hoy mismo.
        </p>

        <div className="space-y-6 pt-4">
        <div className="group flex cursor-pointer items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-all group-hover:bg-primary group-hover:text-white">
            <MessageCircle className="h-5 w-5" />
            </div>
            <div>
            <p className="text-sm text-foreground/70">WhatsApp</p>
            <p className="font-bold">+52 (55) 1234 5678</p>
            </div>
        </div>
        <div className="group flex cursor-pointer items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-all group-hover:bg-primary group-hover:text-white">
            <Mail className="h-5 w-5" />
            </div>
            <div>
            <p className="text-sm text-foreground/70">Correo</p>
            <p className="font-bold">hola@ninoxit.com</p>
            </div>
        </div>
        </div>
    </div>

    <Card className="glass-card rounded-3xl p-8 shadow-2xl md:p-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" placeholder="Tu nombre" className="rounded-xl" required />
            </div>
            <div className="space-y-2">
            <Label htmlFor="business">Negocio</Label>
            <Input id="business" placeholder="Nombre de tu negocio" className="rounded-xl" />
            </div>
        </div>

        <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="correo@ejemplo.com" className="rounded-xl" required />
        </div>

        <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea id="message" placeholder="¿En qué podemos ayudarte?" rows={4} className="rounded-xl" />
        </div>

        <Button type="submit" size="lg" className="cta-gradient w-full rounded-xl text-lg font-bold">
            Enviar Solicitud
        </Button>
        </form>
    </Card>
    </div>
</section>
);
}