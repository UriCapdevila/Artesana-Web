import Link from "next/link";
import { Instagram } from "@/components/Instagram";
import { WhatsApp } from "@/components/WhatsApp";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-300 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo.png" alt="Logo de Artesana" width={28} height={28} />
            <h3 className="text-xl font-headline text-white">Artesana</h3>
          </div>
          <p className="text-sm text-stone-400">
            El Alma en Cada Detalle. Cuadernos y bordados únicos que cuentan historias.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Navegación</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-primary transition-colors">Inicio</Link></li>
            <li><Link href="/products" className="hover:text-primary transition-colors">Creaciones</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">Sobre Mí</Link></li>
            <li><Link href="/#contact" className="hover:text-primary transition-colors">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Sígueme</h3>
          <div className="flex space-x-4">
            <Link href="#" target="_blank" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="w-6 h-6" /></Link>
            <Link href="#" target="_blank" aria-label="WhatsApp" className="hover:text-primary transition-colors"><WhatsApp className="w-6 h-6" /></Link>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-stone-500 mt-8 border-t border-stone-700 pt-6">
        <p>&copy; 2024 Artesana. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
