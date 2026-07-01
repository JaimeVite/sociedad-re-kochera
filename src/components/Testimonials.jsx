const testimonials = [
  { name: "Ana García", role: "Miembro fundador", text: "Re-kochera transformó nuestra forma de conectar. Las actividades son dinámicas y el sentido de comunidad es real." },
  { name: "Carlos Méndez", role: "Participante frecuente", text: "Excelente organización, ambientes seguros y mucha diversión. ¡100% recomendado!" },
  { name: "Laura Ruiz", role: "Aliado estratégico", text: "Trabajar con esta comunidad ha sido inspirador. Cumplen con sus valores y generan impacto tangible." }
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="scroll-mt-20 py-16 px-4 bg-gradient-to-r from-indigo-50 to-pink-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">💬 Testimonios y Casos de Éxito</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 italic mb-4">"{t.text}"</p>
              <p className="font-bold text-gray-800">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}