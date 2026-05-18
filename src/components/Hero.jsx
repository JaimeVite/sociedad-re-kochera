// src/components/Hero.jsx
export default function Hero() {
  return (
    <section 
      id="hero" 
      className="scroll-mt-20 relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"  // ← Mejora: carga más rápida
          className="w-full h-full object-cover"
        >
          <source 
           src="https://www.youtube.com/watch?v=2jAxHjDCRjE" type="video/mp4" />
          
          Tu navegador no soporta video.
        </video>
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Sociedad <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Re-kochera</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Una comunidad donde la diversión, la cultura y la convivencia se encuentran. 
          ¡Únete a nuestras actividades!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            Únete Ahora
          </a>
          <a
            href="#about"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-200"
          >
            Conocer Más
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white hover:opacity-80 transition"
        aria-label="Bajar a Sobre Nosotros"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}