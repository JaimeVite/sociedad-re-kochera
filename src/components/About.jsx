// src/components/About.jsx
export default function About() {
  const values = [
    {
      icon: "🤝",
      title: "Comunidad",
      description: "Conectamos personas con intereses comunes para crear experiencias significativas."
    },
    {
      icon: "🌱",
      title: "Crecimiento",
      description: "Fomentamos el aprendizaje continuo y el desarrollo personal en un ambiente seguro."
    },
    {
      icon: "🎉",
      title: "Diversión",
      description: "Creemos que aprender y crecer también debe ser divertido y relajado."
    }
  ]

  return (
    // 👇 id="about" + scroll-mt-20 para anclas perfectas
    <section 
      id="about" 
      className="scroll-mt-20 py-16 px-4 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sobre Nosotros ✨
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Somos una comunidad recreativa dedicada a conectar personas a través de experiencias únicas, aprendizaje y diversión.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Imagen */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600" 
              alt="Comunidad Re-kochera" 
              className="relative rounded-2xl w-full h-80 object-cover shadow-2xl"
              loading="lazy"
            />
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              ¿Quiénes somos?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-purple-400">Sociedad Re-kochera</strong> nació con la misión de crear un espacio donde las personas puedan desconectarse de la rutina y reconectarse con lo que realmente importa: las relaciones humanas, el aprendizaje significativo y la diversión auténtica.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Organizamos actividades presenciales y virtuales diseñadas para todas las edades, promoviendo valores como el respeto, la inclusión y la colaboración.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <span className="block text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">500+</span>
                <span className="text-sm text-gray-400">Miembros</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">50+</span>
                <span className="text-sm text-gray-400">Eventos</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">4.9★</span>
                <span className="text-sm text-gray-400">Satisfacción</span>
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Nuestros Valores 🌟
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-purple-500/25"
          >
            Únete a la Comunidad →
          </a>
        </div>
      </div>
    </section>
  )
}