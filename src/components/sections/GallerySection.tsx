
import React from 'react';

export const GallerySection = () => {
  return (
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
  );
};
