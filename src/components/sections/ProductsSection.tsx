
import React from 'react';
import { ShoppingBag, Package, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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

export const ProductsSection = () => {
  return (
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
      </div>
    </section>
  );
};
