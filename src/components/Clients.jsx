const partners = ["Fundación XYZ", "Empresa ABC", "Instituto Educativo", "Cooperativa Local", "Marca Partner", "ONG Aliada"]

export default function Clients() {
  return (
    <section id="aliados" className="scroll-mt-20 py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4"> Clientes y Aliados Estratégicos</h2>
        <p className="text-gray-600 mb-8">Organizaciones que respaldan nuestro impacto comunitario</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((p, i) => (
            <div key={i} className="p-4 bg-white rounded-lg shadow-sm text-gray-700 font-medium hover:shadow-md transition">{p}</div>
          ))}
        </div>
      </div>
    </section>
  )
}