
import React from 'react';

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

export const MembersSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center text-primary mb-12 font-dancing">
          Nuestros Integrantes
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {apicultores.map((apicultor, i) => (
            <div key={i}>
              <a href={apicultor.link} target='_blank'>
                <img src={apicultor.src} title={apicultor.title} className="p-6 transition-all duration-300 hover:scale-105" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
