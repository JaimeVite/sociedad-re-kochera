// src/components/Activities.jsx
const activities = [
  {
    id: 1,
    title: "Taller de Cocina Saludable",
    date: "15 Jun 2026",
    time: "3:00 PM - 5:00 PM",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400",
    description: "Aprende recetas nutritivas y divertidas para compartir en familia."
  },
  {
    id: 2,
    title: "Caminata Ecológica",
    date: "22 Jun 2026",
    time: "8:00 AM - 12:00 PM",
    image: "https://images.unsplash.com/photo-1501555088664-1999a8137b94?w=400",
    description: "Conecta con la naturaleza en nuestra ruta guiada por el parque local."
  },
  {
    id: 3,
    title: "Noche de Juegos de Mesa",
    date: "28 Jun 2026",
    time: "6:00 PM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=400",
    description: "Diversión garantizada con juegos clásicos y modernos para todas las edades."
  }
]

export default function Activities() {
  return (
    // 👇 AQUÍ AGREGAMOS scroll-mt-20 (junto a las otras clases, separado por espacio)
    <section 
      id="calendar" 
      className="scroll-mt-20 py-16 px-4 bg-gradient-to-b from-white to-indigo-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Próximas Actividades 🎉
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Únete a nuestras experiencias recreativas y conecta con la comunidad Re-kochera
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act) => (
            <article 
              key={act.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={act.image} 
                  alt={act.title} 
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {act.date}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-800 mb-2">{act.title}</h3>
                <p className="text-sm text-indigo-600 font-medium mb-2">🕐 {act.time}</p>
                <p className="text-gray-600 text-sm mb-4">{act.description}</p>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Reservar Cupo
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}