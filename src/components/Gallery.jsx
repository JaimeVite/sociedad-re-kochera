// src/components/Gallery.jsx
const galleryImages = [
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600",
  "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5JdGeX9woKDD-rldjDJq-rjSQwrKU0KmdKg&s",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600",
]

export default function Gallery() {
  return (
    // 👇 CAMBIOS: id="gallery" (antes "galeria") + scroll-mt-20
    <section 
      id="gallery" 
      className="scroll-mt-20 py-16 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Nuestra Galería 📸
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Momentos inolvidables de la comunidad Re-kochera
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Galería ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">Ver más</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-8 rounded-full transition-colors">
            Ver Galería Completa →
          </button>
        </div>
      </div>
    </section>
  )
}