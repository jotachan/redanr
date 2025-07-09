
import React from 'react';

export const TerritoriesSection = () => {
  return (
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
  );
};
