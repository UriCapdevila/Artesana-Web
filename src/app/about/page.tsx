import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Scissors, Heart, PenTool } from 'lucide-react';

export default function AboutPage() {
  const artisanImage = PlaceHolderImages.find(p => p.id === 'about-artisan')!;

  return (
    <div className="space-y-16 md:space-y-24">
      <header className="text-center space-y-4">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Sobre la Artesana
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          "Cada puntada y cada página en blanco son una promesa de una nueva historia."
        </p>
      </header>

      <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
        <div className="md:col-span-2">
          <Card className="overflow-hidden shadow-lg">
            <div className="relative aspect-[3/4]">
              <Image
                src={artisanImage.imageUrl}
                alt={artisanImage.description}
                data-ai-hint={artisanImage.imageHint}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </Card>
        </div>
        <div className="md:col-span-3 space-y-6 text-foreground/90 text-lg">
          <p>
            ¡Hola! Soy Ana, la mente, el corazón y las manos detrás de Artesana. Desde que tengo memoria, me ha fascinado la textura del papel y el color de los hilos. Transformar estos materiales en cuadernos que guardan secretos y bordados que cuentan historias no es solo mi trabajo; es mi pasión y mi forma de conectar con el mundo.
          </p>
          <p>
            Mi viaje comenzó en un pequeño rincón de mi casa, con una aguja, hilos de colores y un montón de ideas. Aprendí las técnicas de encuadernación y bordado de forma autodidacta, experimentando con puntadas, papeles y telas. Cada cuaderno cosido y cada diseño bordado es un acto de paciencia y dedicación.
          </p>
          <p>
            En Artesana, creo en la belleza de lo imperfecto y lo personal. Cada pieza está hecha a mano, asegurando que no haya dos iguales. Mi inspiración proviene de la naturaleza, los cuentos antiguos y la calma de las pequeñas cosas, buscando siempre capturar la esencia de "el alma en cada detalle".
          </p>
        </div>
      </div>

      <section className="bg-card p-8 md:p-12 rounded-lg shadow-sm">
        <h2 className="font-headline text-3xl md:text-4xl text-center mb-10 text-foreground/90">Mi Filosofía</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-primary/10 p-4 rounded-full">
              <PenTool className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-headline text-xl font-semibold">Artesanía Pura</h3>
            <p className="text-muted-foreground">
              Cada creación es 100% hecha a mano, garantizando un carácter y una calidad inigualables.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-primary/10 p-4 rounded-full">
              <Scissors className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-headline text-xl font-semibold">Materiales con Alma</h3>
            <p className="text-muted-foreground">
              Selecciono cuidadosamente papeles, telas, hilos y cueros que inspiran al tacto y a la vista.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-primary/10 p-4 rounded-full">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-headline text-xl font-semibold">Hecho con Amor</h3>
            <p className="text-muted-foreground">
              Mi pasión se refleja en cada detalle, creando piezas que conectan emocionalmente.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
