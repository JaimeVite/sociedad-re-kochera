export default function MissionVision() {
  return (
    <section id="mision-vision" className="scroll-mt-20 py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10"> Misión y Visión</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Misión</h3>
            <p className="text-gray-600">Facilitar espacios de conexión y aprendizaje recreativo que fortalezcan el tejido social, promoviendo la inclusión, la creatividad y el bienestar colectivo.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-pink-500">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Visión</h3>
            <p className="text-gray-600">Ser la comunidad líder en innovación recreativa en Latinoamérica, reconocida por transformar experiencias cotidianas en oportunidades de crecimiento humano y colaborativo.</p>
          </div>
        </div>
      </div>
    </section>
  )
}