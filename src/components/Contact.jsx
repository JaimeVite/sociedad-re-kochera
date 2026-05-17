// src/components/Contact.jsx
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: false, error: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: '' })

    // ⏱️ Fallback de seguridad: si pasa más de 10 segundos, forzamos el fin
    const timeoutId = setTimeout(() => {
      console.warn('⚠️ Timeout: La solicitud de EmailJS tardó más de 10s')
      setStatus(prev => ({ ...prev, loading: false, error: 'La conexión tardó demasiado. Intenta de nuevo.' }))
    }, 10000)

    try {
      console.log('📤 Enviando correo con EmailJS...')
      
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      // ✅ Cancelamos el timeout porque todo salió bien
      clearTimeout(timeoutId)
      console.log('✅ Email enviado:', result.text)

      setStatus({ loading: false, success: true, error: '' })
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000)

    } catch (error) {
      // ✅ También cancelamos el timeout en caso de error
      clearTimeout(timeoutId)
      
      console.error('❌ Error detallado:', error)
      
      // Mensaje más descriptivo según el tipo de error
      const errorMessage = error.text 
        ? `Error de EmailJS: ${error.text}` 
        : 'No se pudo conectar con el servidor. Verifica tu internet.'
      
      setStatus({ loading: false, success: false, error: errorMessage })
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="scroll-mt-20 py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-700">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          ¡Contáctanos! 💬
        </h2>
        <p className="text-center text-indigo-100 mb-12">
          ¿Tienes dudas o quieres unirte? Escríbenos y te responderemos pronto
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-1">Nombre *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
                  placeholder="Tu nombre" disabled={status.loading} />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-1">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
                  placeholder="tu@email.com" disabled={status.loading} />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-1">Mensaje *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white resize-none disabled:opacity-50"
                  placeholder="¿En qué podemos ayudarte?" disabled={status.loading} />
              </div>

              {/* Mensajes de estado */}
              {status.success && (
                <div className="p-3 bg-green-500/20 border border-green-400 rounded-lg text-green-100 text-sm animate-pulse">
                  ✅ ¡Mensaje enviado con éxito! Te responderemos pronto.
                </div>
              )}
              {status.error && (
                <div className="p-3 bg-red-500/20 border border-red-400 rounded-lg text-red-100 text-sm">
                  ⚠️ {status.error}
                  <button 
                    type="button" 
                    onClick={() => setStatus(prev => ({ ...prev, error: '' }))}
                    className="ml-2 underline hover:text-red-200"
                  >
                    Cerrar
                  </button>
                </div>
              )}

              <button type="submit" disabled={status.loading}
                className="w-full bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-indigo-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {status.loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-indigo-600" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Enviando...
                  </>
                ) : 'Enviar Mensaje ✉️'}
              </button>
            </div>
          </form>

          {/* Info de contacto */}
          <div className="text-white space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <h4 className="font-bold">Ubicación</h4>
                <p className="text-indigo-100">Colombia 🇨🇴<br />Comunidad virtual y presencial</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✉️</span>
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-indigo-100">hola@sociedadrekochera.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">🔗</span>
              <div>
                <h4 className="font-bold">Redes Sociales</h4>
                <div className="flex gap-3 mt-2">
                  <a href="https://www.instagram.com/sociedad_re_kochera/" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">Instagram</a>
                  <a href="https://www.facebook.com/groups/403422189823620/posts/3251169765048834/" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}