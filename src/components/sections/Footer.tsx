
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
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
  );
};
