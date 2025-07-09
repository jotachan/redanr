
import React from 'react';
import { PlayCircle, Video, Podcast, Mic, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const contenidoDigital = [
  {
    titulo: "Conversaciones Regenerativas",
    descripcion: "Podcast semanal donde exploramos la sabiduría ancestral de la apicultura",
    icono: Podcast,
    plataforma: "Spotify",
    enlace: "https://open.spotify.com",
    color: "bg-gradient-to-br from-green-600 to-emerald-700"
  },
  {
    titulo: "Documentales en Vivo",
    descripcion: "Experiencias inmersivas desde nuestros apiarios en diferentes territorios",
    icono: Video,
    plataforma: "YouTube",
    enlace: "https://youtube.com",
    color: "bg-gradient-to-br from-amber-600 to-orange-700"
  },
  {
    titulo: "Comunidad Instagram",
    descripcion: "Síguenos para contenido diario, tips y conexión con la comunidad apícola",
    icono: Instagram,
    plataforma: "Instagram",
    enlace: "https://instagram.com/redapiculturanatural",
    color: "bg-gradient-to-br from-pink-600 to-purple-600"
  }
];

export const DigitalContentSection = () => {
  return (
    <section className="py-16 px-4 bg-card/60">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-primary mb-4 font-dancing">
            Ecosistema Digital Regenerativo
          </h3>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Conectamos saberes ancestrales con tecnología moderna para compartir conocimiento 
            sobre apicultura regenerativa en múltiples formatos
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {contenidoDigital.map((contenido, index) => (
            <Card key={index} className="bg-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-border overflow-hidden group">
              <div className={`${contenido.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
                  <contenido.icono className="w-full h-full" />
                </div>
                <contenido.icono className="w-8 h-8 mb-3 relative z-10" />
                <h4 className="text-xl font-bold mb-2 relative z-10">{contenido.titulo}</h4>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full relative z-10">{contenido.plataforma}</span>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                  {contenido.descripcion}
                </p>
                <Button
                  onClick={() => window.open(contenido.enlace, '_blank')}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-all duration-300"
                >
                  Explorar Contenido
                  <PlayCircle className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
            <Mic className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-primary mb-3 font-dancing">
              ¿Tienes una historia que contar?
            </h4>
            <p className="text-muted-foreground mb-6 font-light">
              Invitamos a apicultores de toda Latinoamérica a compartir sus experiencias y conocimientos
            </p>
            <Button
              onClick={() => window.open('mailto:info@apicultura-regenerativa.org', '_blank')}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-2 rounded-full"
            >
              Participar en el Podcast
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
