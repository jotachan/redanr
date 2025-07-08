
import React from 'react';
import { Download, Users, Leaf, Phone, Mail, MapPin, PlayCircle, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const Index = () => {
  const handleDownload = () => {
    toast.success("Descarga iniciada", {
      description: "El documento de estándares se está descargando"
    });
  };

  const principios = [
    {
      title: "Respeto al Ciclo Natural",
      description: "Trabajamos siguiendo los ritmos naturales de las abejas y las estaciones"
    },
    {
      title: "Biodiversidad Activa", 
      description: "Fomentamos la diversidad de flora para un ecosistema equilibrado"
    },
    {
      title: "Manejo Mínimo",
      description: "Intervenciones respetuosas que no alteren el comportamiento natural"
    },
    {
      title: "Sostenibilidad Territorial",
      description: "Prácticas que regeneran y mejoran los ecosistemas locales"
    },
    {
      title: "Calidad sin Químicos",
      description: "Producción libre de químicos sintéticos y tratamientos agresivos"
    },
    {
      title: "Conocimiento Ancestral",
      description: "Integración de saberes tradicionales con técnicas modernas"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/dc062be3-d94c-460a-8534-b007ccf0fcb0.png" 
                alt="Logo Red de Apicultura Natural Regenerativa"
                className="w-12 h-12 object-contain"
              />
              <h1 className="text-xl font-bold text-orange-800 font-dancing">Red de Apicultura Natural Regenerativa</h1>
            </div>
            <Button 
              onClick={handleDownload}
              className="bg-orange-700 hover:bg-orange-800 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Descargar Estándares
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 min-h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/9c2542aa-626d-4052-b6ed-66e1f180efa1.png)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg font-dancing">
              Apicultura que <span className="text-amber-300">Regenera</span> la Naturaleza
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in drop-shadow-md font-light">
              Somos una red de apicultores comprometidos con prácticas sostenibles que respetan 
              el equilibrio natural y fortalecen los ecosistemas locales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleDownload}
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Obtener Estándares de Producción
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Principios Section */}
      <section className="py-16 px-4 bg-white/60">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-orange-800 mb-12 font-dancing">
            Los 6 Principios de la Apicultura Natural Regenerativa
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principios.map((principio, index) => (
              <Card key={index} className="bg-white/90 border-orange-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-orange-800 mb-3 font-medium">{principio.title}</h4>
                  <p className="text-orange-700 font-light">{principio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logos de Integrantes */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-orange-800 mb-12 font-dancing">
            Nuestros Integrantes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="bg-white/90 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-orange-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <p className="text-center text-orange-800 font-medium">Apicultor {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Fotos */}
      <section className="py-16 px-4 bg-white/60">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-orange-800 mb-12 font-dancing">
            Nuestro Trabajo en Imágenes
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "photo-1498936178812-4b2e558d2937",
              "photo-1465146344425-f00d5f5c8f07",
              "photo-1509316975850-ff9c5deb0cd9",
              "photo-1518495973542-4542c06a5843",
              "photo-1472396961693-142e6e269027",
              "photo-1465379944081-7f47de8d74ac"
            ].map((photo, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=400&h=300`}
                  alt={`Apicultura natural ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Territorios Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-orange-700 to-red-700 rounded-2xl p-12 text-white text-center">
            <h3 className="text-4xl font-bold mb-6 font-dancing">
              "La apicultura regenerativa trasciende fronteras y conecta territorios"
            </h3>
            <p className="text-xl mb-8 opacity-90 font-light">
              De montañas a valles, de bosques a praderas, nuestras prácticas se adaptan y regeneran cada ecosistema único
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { region: "Montañas Andinas", image: "photo-1518495973542-4542c06a5843" },
                { region: "Valles Centrales", image: "photo-1509316975850-ff9c5deb0cd9" },
                { region: "Costas Pacíficas", image: "photo-1465146344425-f00d5f5c8f07" }
              ].map((territorio, index) => (
                <div key={index} className="relative">
                  <img 
                    src={`https://images.unsplash.com/${territorio.image}?auto=format&fit=crop&w=300&h=200`}
                    alt={territorio.region}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 rounded-b-lg">
                    <p className="font-semibold">{territorio.region}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Podcast y YouTube Section */}
      <section className="py-16 px-4 bg-white/60">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-orange-800 mb-8 font-dancing">
            Nuestro Contenido Digital
          </h3>
          <p className="text-xl text-orange-700 mb-8 font-light">
            Conversaciones profundas sobre apicultura regenerativa y sostenibilidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('https://open.spotify.com', '_blank')}
              size="lg"
              className="bg-orange-700 hover:bg-orange-800 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Escuchar en Spotify
            </Button>
            <Button 
              onClick={() => window.open('https://youtube.com', '_blank')}
              size="lg"
              className="bg-stone-700 hover:bg-stone-800 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Youtube className="w-5 h-5 mr-2" />
              Ver en YouTube
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de Contacto con Texto Inspirador */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-orange-800 mb-8 font-dancing">
              Únete a la Regeneración
            </h3>
            <div className="bg-gradient-to-r from-orange-700 to-red-700 rounded-2xl p-12 text-white">
              <p className="text-2xl font-light mb-6 italic font-dancing">
                "Cada colmena es un universo de sabiduría ancestral. Cada abeja, un maestro de la sostenibilidad. 
                Juntos, tejemos la red que regenera nuestros territorios."
              </p>
              <div className="flex items-center justify-center space-x-3 text-lg">
                <Mail className="w-6 h-6" />
                <a 
                  href="mailto:info@apicultura-regenerativa.org"
                  className="hover:text-amber-200 transition-colors underline decoration-2 underline-offset-4 font-medium"
                >
                  info@apicultura-regenerativa.org
                </a>
              </div>
              <p className="text-orange-100 mt-4 font-light">
                Conecta con nosotros y sé parte del cambio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/dc062be3-d94c-460a-8534-b007ccf0fcb0.png" 
              alt="Logo Red de Apicultura Natural Regenerativa"
              className="w-8 h-8 object-contain bg-white rounded p-1"
            />
            <h4 className="text-xl font-bold font-dancing">Red de Apicultura Natural Regenerativa</h4>
          </div>
          <p className="text-orange-200 mb-4 font-light">
            Regenerando ecosistemas, una colmena a la vez
          </p>
          <div className="flex justify-center space-x-6 text-orange-200">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Latinoamérica
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              +1 234 567 890
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              info@apicultura-regenerativa.org
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
