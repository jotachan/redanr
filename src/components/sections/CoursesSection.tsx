
import React from 'react';
import { BookOpen, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

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

export const CoursesSection = () => {
  return (
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
  );
};
