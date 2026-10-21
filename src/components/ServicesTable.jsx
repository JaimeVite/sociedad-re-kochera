const services = [
  { name: "Talleres Creativos", desc: "Espacios prácticos de arte y manualidades", duration: "2 horas", status: "Disponible" },
  { name: "Encuentros Comunitarios", desc: "Actividades grupales de integración social", duration: "3 horas", status: "Disponible" },
  { name: "Festival Recreativo", desc: "Evento anual con música, juegos y cultura", duration: "1 día", status: "Próximamente" },
]

export default function ServicesTable() {
  return (
    <section id="servicios" className="scroll-mt-20 py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">📋 Servicios y Actividades</h2>
        <div className="overflow-x-auto bg-gray-50 rounded-xl shadow-md">
          <table className="w-full text-left border-collapse">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-4 border-b">Servicio</th>
                <th className="p-4 border-b">Descripción</th>
                <th className="p-4 border-b">Duración</th>
                <th className="p-4 border-b">Estado</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s, i) => (
                <tr key={i} className="hover:bg-white transition border-b">
                  <td className="p-4 font-medium">{s.name}</td>
                  <td className="p-4 text-gray-600">{s.desc}</td>
                  <td className="p-4">{s.duration}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${s.status === 'Disponible' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}