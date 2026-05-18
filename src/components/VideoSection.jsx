export default function VideoSection() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Conoce Más Sobre Nosotros 🎬
        </h2>
        
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ScMzIvxBSi4"
            title="Video de Sociedad Re-kochera"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        
        <p className="text-gray-300 text-center mt-6">
          Descubre todo lo que hacemos en Sociedad Re-kochera
        </p>
      </div>
    </section>
  )
}