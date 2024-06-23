import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* Copyright */}
          <div className="text-muted-foreground">
            Copyrigth &copy; 2024 - Todos los derechos reservados
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
