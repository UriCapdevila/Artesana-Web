'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Instagram } from '@/components/Instagram';
import { WhatsApp } from '@/components/WhatsApp';
import { Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(values);
    setIsSubmitting(false);
    toast({
      title: 'Mensaje Enviado',
      description: 'Gracias por contactarme. Te responderé lo antes posible.',
    });
    form.reset();
  }

  return (
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Hablemos
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          ¿Tienes una pregunta, una idea para un encargo especial, o simplemente quieres saludar? Estaré encantada de escucharte.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Envía un Mensaje</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Cuéntame cómo puedo ayudarte..." {...field} rows={6} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="space-y-8">
            <h2 className="font-headline text-2xl text-foreground/90">Otras Formas de Contacto</h2>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <a href="mailto:hola@artesana.com" className="text-lg hover:text-primary transition-colors">hola@artesana.com</a>
                </div>
                 <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <a href="tel:+34600000000" className="text-lg hover:text-primary transition-colors">+34 600 000 000</a>
                </div>
            </div>
            <h2 className="font-headline text-2xl text-foreground/90 mt-8">Sígueme</h2>
             <div className="flex space-x-4">
                <Link href="#" target="_blank" aria-label="Instagram" className="hover:text-primary transition-colors">
                    <Instagram className="w-8 h-8" />
                </Link>
                <Link href="#" target="_blank" aria-label="WhatsApp" className="hover:text-primary transition-colors">
                    <WhatsApp className="w-8 h-8" />
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
