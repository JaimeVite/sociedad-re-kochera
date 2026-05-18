export default function VideoSection() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Conoce Más Sobre Nosotros 🎬
        </h2>
        
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <video 
            controls 
            className="w-full h-full"
            poster="/images/video-thumbnail.jpg" // Imagen de portada opcional
          >
            <source 
              src="https://www.youtube.com/watch?v=2jAxHjDCRjE" 
              type="video/mp4" 
            />
            Tu navegador no soporta videos HTML5.
          </video>
        </div>
        
        <p className="text-gray-300 text-center mt-6">
          Descubre todo lo que hacemos en Sociedad Re-kochera
        </p>
      </div>
    </section>
  )
}