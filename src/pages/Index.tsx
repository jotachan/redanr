
import React from 'react';
import { Download, Users, Leaf, Phone, Mail, MapPin, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Index = () => {
  const handleDownload = () => {
    toast.success("Descarga iniciada", {
      description: "El documento de estándares se está descargando"
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado", {
      description: "Te contactaremos pronto"
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/dc062be3-d94c-460a-8534-b007ccf0fcb0.png" 
                alt="Logo Red de Apicultura Natural Regenerativa"
                className="w-12 h-12 object-contain"
              />
              <h1 className="text-xl font-bold text-green-800">Red de Apicultura Natural Regenerativa</h1>
            </div>
            <Button 
              onClick={handleDownload}
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Descargar Estándares
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-green-800 mb-6 animate-fade-in">
              Apicultura que <span className="text-amber-500">Regenera</span> la Naturaleza
            </h2>
            <p className="text-xl text-green-700 mb-8 leading-relaxed animate-fade-in">
              Somos una red de apicultores comprometidos con prácticas sostenibles que respetan 
              el equilibrio natural y fortalecen los ecosistemas locales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleDownload}
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Obtener Estándares de Producción
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Principios Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-green-800 mb-12">
            Los 6 Principios de la Apicultura Natural Regenerativa
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principios.map((principio, index) => (
              <Card key={index} className="bg-white/80 border-amber-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-green-800 mb-3">{principio.title}</h4>
                  <p className="text-green-600">{principio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logos de Integrantes */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-green-800 mb-12">
            Nuestros Integrantes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="bg-white/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <p className="text-center text-green-700 font-medium">Apicultor {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Fotos */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-green-800 mb-12">
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
          <div className="bg-gradient-to-r from-green-600 to-amber-600 rounded-2xl p-12 text-white text-center">
            <h3 className="text-4xl font-bold mb-6">
              "La apicultura regenerativa trasciende fronteras y conecta territorios"
            </h3>
            <p className="text-xl mb-8 opacity-90">
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

      {/* Podcast Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-green-800 mb-8">
            Escucha Nuestro Podcast
          </h3>
          <p className="text-xl text-green-700 mb-8">
            Conversaciones profundas sobre apicultura regenerativa y sostenibilidad
          </p>
          <Button 
            onClick={() => window.open('https://open.spotify.com', '_blank')}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <PlayCircle className="w-5 h-5 mr-2" />
            Escuchar en Spotify
          </Button>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-4xl font-bold text-center text-green-800 mb-12">
              Conecta con Nosotros
            </h3>
            <Card className="bg-white/80 border-amber-200">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-green-700 font-medium mb-2">Nombre</label>
                      <Input 
                        placeholder="Tu nombre completo"
                        className="border-amber-200 focus:border-amber-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-green-700 font-medium mb-2">Email</label>
                      <Input 
                        type="email"
                        placeholder="tu@email.com"
                        className="border-amber-200 focus:border-amber-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Mensaje</label>
                    <Textarea 
                      placeholder="Cuéntanos sobre tu interés en la apicultura regenerativa..."
                      className="border-amber-200 focus:border-amber-500 min-h-32"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white font-bold py-3 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/dc062be3-d94c-460a-8534-b007ccf0fcb0.png" 
              alt="Logo Red de Apicultura Natural Regenerativa"
              className="w-8 h-8 object-contain bg-white rounded p-1"
            />
            <h4 className="text-xl font-bold">Red de Apicultura Natural Regenerativa</h4>
          </div>
          <p className="text-green-200 mb-4">
            Regenerando ecosistemas, una colmena a la vez
          </p>
          <div className="flex justify-center space-x-6 text-green-200">
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
