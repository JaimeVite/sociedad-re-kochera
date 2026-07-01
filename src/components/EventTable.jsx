const events = [
  { name: "Taller Creativo", date: "15 Ago", spots: "20", status: "Abierto" },
  { name: "Encuentro Comunitario", date: "22 Ago", spots: "50", status: "Por confirmar" },
  { name: "Festival Recreativo", date: "05 Sep", spots: "100", status: "Abierto" },
]

export default function EventTable() {
  return (
    <section id="tabla" className="scroll-mt-20 py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">📅 Calendario de Actividades</h2>
        <div className="overflow-x-auto bg-gray-50 rounded-xl shadow-md">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 border-b font-semibold text-gray-700">Evento</th>
                <th className="p-4 border-b font-semibold text-gray-700">Fecha</th>
                <th className="p-4 border-b font-semibold text-gray-700">Cupos</th>
                <th className="p-4 border-b font-semibold text-gray-700">Estado</th>
              </tr>
            </thead>
            <tbody>
              {events.map((ev, i) => (
                <tr key={i} className="hover:bg-white transition">
                  <td className="p-4 border-b">{ev.name}</td>
                  <td className="p-4 border-b">{ev.date}</td>
                  <td className="p-4 border-b">{ev.spots}</td>
                  <td className="p-4 border-b">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${ev.status === 'Abierto' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {ev.status}
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