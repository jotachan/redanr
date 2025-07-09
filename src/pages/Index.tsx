import React from 'react';
import { Download, Users, Leaf, Phone, Mail, MapPin, PlayCircle, Youtube, Headphones, Video, Podcast, Mic, Instagram, BookOpen, Calendar, Star, ShoppingBag, Droplet, Package } from 'lucide-react';
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
      description: "Conoce y respeta los patrones de comportamiento y ciclos naturales del organismo colmena"
    },
    {
      title: "Biodiversidad Activa", 
      description: "Comprende a las abejas en tu contexto ecosistémico"
    },
    {
      title: "Calidad sin Químicos",
      description: "No ataques a tus colmenas con productos químicos y alimentos artificiales"
    },
    {
      title: "Conocimiento Ancestral",
      description: "Poliproductividad y equilibrio en las cosechas "
    },
    {
      title: "Manejo Mínimo",
      description: "Realiza tus intervenciones en base a la observación"
    },
    {
      title: "Sostenibilidad Territorial",
      description: "Co-crear nuevas economías, circuitos cortos y precios justos"
    }
  ];

  const apicultores = [
    {
      src: "images/logos/AnrEscuela.jpeg",
      title: "Escuela de Apicultura Natural Regenerativa",
      link: "https://www.apiculturanatural.com/"
    },
    {
      src: "images/logos/apivet.png", 
      title: "ApiVet",
      link: "https://www.instagram.com/apivet.cl/"
    },
    {
      src: "images/logos/valymu.jpeg",
      title: "Valymu",
      link: "https://www.instagram.com/valymu.cl/"
    },
    {
      src: "images/logos/Raices.jpeg",
      title: "Raíces del Viento",
      link: "https://www.instagram.com/raicesdelviento/"
    },
    {
      src: "images/logos/AbejaDorada.jpg",
      title: "Abeja Dorada",
      link: "https://www.instagram.com/abejadoradacl/"
    }
  ];

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

  const cursosDisponibles = [
    {
      titulo: "Fundamentos de Apicultura Natural",
      instructor: "Escuela de Apicultura Natural Regenerativa",
      duracion: "8 semanas",
      modalidad: "Online + Prácticas presenciales",
      precio: "$120.000 CLP",
      descripcion: "Curso completo que abarca desde los principios básicos hasta técnicas avanzadas de manejo regenerativo",
      proximaFecha: "15 de Marzo, 2024",
      nivel: "Principiante"
    },
    {
      titulo: "Manejo Sanitario Natural",
      instructor: "ApiVet",
      duracion: "4 semanas",
      modalidad: "Online",
      precio: "$80.000 CLP",
      descripcion: "Aprende a mantener colmenas saludables sin químicos, usando métodos naturales y preventivos",
      proximaFecha: "22 de Marzo, 2024",
      nivel: "Intermedio"
    },
    {
      titulo: "Productos de la Colmena",
      instructor: "Valymu",
      duracion: "6 semanas",
      modalidad: "Híbrido",
      precio: "$95.000 CLP",
      descripcion: "Procesamiento y comercialización de miel, polen, propóleo y otros productos apícolas",
      proximaFecha: "5 de Abril, 2024",
      nivel: "Intermedio"
    },
    {
      titulo: "Apicultura y Ecosistemas",
      instructor: "Raíces del Viento",
      duracion: "5 semanas",
      modalidad: "Online",
      precio: "$70.000 CLP",
      descripcion: "Comprende la relación entre las abejas y su entorno para crear sistemas regenerativos",
      proximaFecha: "12 de Abril, 2024",
      nivel: "Avanzado"
    }
  ];

  const tiendas = [
    {
      nombre: "Miel Pura Valymu",
      integrante: "Valymu",
      descripcion: "Miel artesanal de floración nativa, cosechada con métodos regenerativos en el valle central",
      productos: ["Miel de Quillay", "Miel de Espino", "Miel Multifloral", "Polen"],
      imagen: "images/logos/valymu.jpeg",
      enlace: "https://www.instagram.com/valymu.cl/",
      destacado: "Miel de Quillay Premium"
    },
    {
      nombre: "Productos Raíces del Viento",
      integrante: "Raíces del Viento",
      descripcion: "Productos apícolas orgánicos de la Patagonia, con certificación regenerativa",
      productos: ["Miel Patagónica", "Propóleo", "Cera de Abejas", "Jalea Real"],
      imagen: "images/logos/Raices.jpeg",
      enlace: "https://www.instagram.com/raicesdelviento/",
      destacado: "Propóleo Patagónico"
    },
    {
      nombre: "Abeja Dorada Artesanal",
      integrante: "Abeja Dorada",
      descripcion: "Miel gourmet y productos de valor agregado, elaborados con técnicas ancestrales",
      productos: ["Miel Cremosa", "Hidromiel", "Velas de Cera", "Cosméticos"],
      imagen: "images/logos/AbejaDorada.jpg",
      enlace: "https://www.instagram.com/abejadoradacl/",
      destacado: "Hidromiel Artesanal"
    },
    {
      nombre: "Productos Naturales ANR",
      integrante: "Escuela de Apicultura Natural",
      descripcion: "Línea completa de productos educativos y apícolas para principiantes y expertos",
      productos: ["Kit Iniciación", "Herramientas", "Cursos Online", "Libros"],
      imagen: "images/logos/AnrEscuela.jpeg",
      enlace: "https://www.apiculturanatural.com/",
      destacado: "Kit Completo Principiante"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-card/90 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logos/ANR_200.png"
                alt="Logo Red de Apicultura Natural Regenerativa"
                className="w-12 h-12 object-contain"
              />
              <h1 className="text-xl font-bold text-primary font-dancing">Red de Apicultura Natural Regenerativa</h1>
            </div>
            <Button
              onClick={handleDownload}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
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

      {/* Principios Section */}
      <section className="py-16 px-4 bg-card/60">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-primary mb-12 font-dancing">
            Los 6 Principios de la Apicultura Natural Regenerativa
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principios.map((principio, index) => (
              <Card key={index} className="bg-card/90 border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-3 font-medium">{principio.title}</h4>
                  <p className="text-muted-foreground font-light">{principio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logos de Integrantes */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-primary mb-12 font-dancing">
            Nuestros Integrantes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {apicultores.map((apicultor, i) => (
              <div key={i} >
                <a href={apicultor.link} target='_blank'>
                  <img src={apicultor.src} title={apicultor.title} className="p-6 transition-all duration-300 hover:scale-105" /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Fotos */}
      <section className="py-16 px-4 bg-card/60">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-primary mb-12 font-dancing">
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
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-primary-foreground text-center">
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

      {/* Contenido Digital Section */}
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

      {/* Nueva Sección de Cursos */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4 font-dancing">
              Cursos y Formación
            </h3>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Aprende de los mejores. Nuestros integrantes ofrecen formación especializada 
              en diferentes aspectos de la apicultura natural regenerativa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cursosDisponibles.map((curso, index) => (
              <Card key={index} className="bg-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-primary mb-2 font-dancing">
                        {curso.titulo}
                      </h4>
                      <p className="text-muted-foreground font-medium mb-1">
                        por {curso.instructor}
                      </p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          curso.nivel === 'Principiante' ? 'bg-green-100 text-green-800' :
                          curso.nivel === 'Intermedio' ? 'bg-amber-100 text-amber-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {curso.nivel}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <BookOpen className="w-8 h-8 text-primary mb-2" />
                    </div>
                  </div>

                  <p className="text-muted-foreground font-light mb-6 leading-relaxed">
                    {curso.descripcion}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Duración:</span>
                      <span className="font-medium">{curso.duracion}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Modalidad:</span>
                      <span className="font-medium">{curso.modalidad}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Próxima fecha:</span>
                      <span className="font-medium flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {curso.proximaFecha}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-2xl font-bold text-primary">{curso.precio}</span>
                    </div>
                    <Button
                      onClick={() => toast.success("Información enviada", {
                        description: "Te contactaremos pronto con más detalles del curso"
                      })}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300"
                    >
                      Más Información
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-primary-foreground">
              <Star className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-3 font-dancing">
                ¿Eres instructor y quieres unirte?
              </h4>
              <p className="text-primary-foreground/90 mb-6 font-light">
                Si eres apicultor con experiencia y quieres compartir tus conocimientos, 
                te invitamos a formar parte de nuestra red de instructores
              </p>
              <Button
                onClick={() => window.open('mailto:cursos@apicultura-regenerativa.org', '_blank')}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-2 rounded-full"
              >
                Ser Instructor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva Sección de Productos y Tiendas */}
      <section className="py-16 px-4 bg-card/60">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4 font-dancing">
              Productos de Nuestros Integrantes
            </h3>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Descubre productos únicos elaborados por los miembros de nuestra red, 
              donde cada compra apoya directamente a apicultores regenerativos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tiendas.map((tienda, index) => (
              <Card key={index} className="bg-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border overflow-hidden group">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center overflow-hidden">
                    <img 
                      src={tienda.imagen} 
                      alt={tienda.integrante}
                      className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {tienda.destacado}
                      </span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-primary mb-2 font-dancing">
                      {tienda.nombre}
                    </h4>
                    <p className="text-muted-foreground font-medium mb-1">
                      por {tienda.integrante}
                    </p>
                  </div>

                  <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                    {tienda.descripcion}
                  </p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-primary mb-2 flex items-center">
                      <Package className="w-4 h-4 mr-2" />
                      Productos Disponibles:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {tienda.productos.map((producto, idx) => (
                        <span 
                          key={idx}
                          className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {producto}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={() => window.open(tienda.enlace, '_blank')}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold rounded-full transition-all duration-300"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Ver Productos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-border">
              <Droplet className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-primary mb-3 font-dancing">
                ¿Tienes productos para vender?
              </h4>
              <p className="text-muted-foreground mb-6 font-light">
                Si eres miembro de la red y tienes productos apícolas para ofrecer, 
                podemos ayudarte a conectar con más clientes
              </p>
              <Button
                onClick={() => window.open('mailto:ventas@apicultura-regenerativa.org', '_blank')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-2 rounded-full"
              >
                Publicar mis Productos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto con Texto Inspirador */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-primary mb-8 font-dancing">
              Únete a la Regeneración
            </h3>
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-primary-foreground">
              <p className="text-2xl font-light mb-6 italic">
                "Cada colmena es un universo de sabiduría ancestral. Cada abeja, un maestro de la sostenibilidad.
                Juntos, tejemos la red que regenera nuestros territorios."
              </p>
              <div className="flex items-center justify-center space-x-3 text-lg">
                <Mail className="w-6 h-6" />
                <a
                  href="mailto:info@apicultura-regenerativa.org"
                  className="hover:text-accent transition-colors underline decoration-2 underline-offset-4 font-medium"
                >
                  info@apicultura-regenerativa.org
                </a>
              </div>
              <p className="text-primary-foreground/80 mt-4 font-light">
                Conecta con nosotros y sé parte del cambio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img
              src="/lovable-uploads/dc062be3-d94c-460a-8534-b007ccf0fcb0.png"
              alt="Logo Red de Apicultura Natural Regenerativa"
              className="w-8 h-8 object-contain bg-white rounded p-1"
            />
            <h4 className="text-xl font-bold font-dancing">Red de Apicultura Natural Regenerativa</h4>
          </div>
          <p className="text-primary-foreground/80 mb-4 font-light">
            Regenerando ecosistemas, una colmena a la vez
          </p>
          <div className="flex justify-center space-x-6 text-primary-foreground/80">
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
