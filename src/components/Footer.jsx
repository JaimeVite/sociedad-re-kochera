// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Sociedad Re-kochera ✨</h3>
            <p className="text-gray-400 max-w-md">
              Conectando personas a través de experiencias recreativas, 
              aprendizaje y diversión en comunidad.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#calendar" className="hover:text-white transition">Actividades</a></li>
              <li><a href="#gallery" className="hover:text-white transition">Galería</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
             
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Sociedad Re-kochera. Hecho con ❤️ y React.</p>
        </div>
      </div>
    </footer>
  )
}