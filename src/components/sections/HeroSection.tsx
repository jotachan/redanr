
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export const HeroSection = () => {
  const handleDownload = () => {
    toast.success("Descarga iniciada", {
      description: "El documento de estándares se está descargando"
    });
  };

  return (
    <section className="relative py-20 px-4 min-h-[80vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/photos/revision_2.png)'
        }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg font-dancing">
            Apicultura que <span className="text-accent">Regenera</span> la Naturaleza
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in drop-shadow-md font-light">
            Somos una red de apicultores comprometidos con prácticas sostenibles que respetan
            el equilibrio natural y fortalecen los ecosistemas locales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Obtener Estándares de Producción
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
