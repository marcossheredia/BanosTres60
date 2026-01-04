<script setup>
import { ref } from 'vue';

const nombre = ref('');
const email = ref('');
const telefono = ref('');
const mensaje = ref('');
const pdfFiles = ref([]);
const mostrarCV = ref(false);

// ✅ Endpoint sencillo sin backend propio (FormSubmit)
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/duchastres60@gmail.com';

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  if (file.type !== 'application/pdf') {
    alert('Solo se permiten archivos PDF');
    event.target.value = '';
    return;
  }
  if (file.size > 5 * 1024 * 1024) { // 5MB limit
    alert('El archivo debe ser menor a 5MB');
    event.target.value = '';
    return;
  }

  pdfFiles.value = [file];
}

const enviarFormulario = async () => {
  try {
    // Validación muy básica
    if (!nombre.value || !email.value || !mensaje.value) {
      alert('Por favor, completa los campos obligatorios (Nombre, Email y Mensaje).');
      return;
    }

    const formData = new FormData();
    // Campos que entenderá el servicio
    formData.append('name', nombre.value);
    formData.append('email', email.value);          // usado como Reply-To
    formData.append('phone', telefono.value || '');
    formData.append('message', mensaje.value);
    formData.append('_subject', `Nuevo mensaje de contacto de ${nombre.value}`);
    formData.append('_template', 'table');          // presentación más clara en el correo

    // Adjuntos (si activas mostrarCV)
    pdfFiles.value.forEach(file => {
      // FormSubmit acepta multipart; usamos un nombre genérico "attachments"
      formData.append('attachments', file, file.name || 'adjunto.pdf');
    });

    // 🚀 Envío real
    const resp = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: formData
      // NO pongas Content-Type; el navegador lo establece para multipart/form-data
    });

    // FormSubmit devuelve JSON { success: '...' } o similar
    if (!resp.ok) {
      const text = await resp.text().catch(() => '');
      throw new Error(text || `Error HTTP ${resp.status}`);
    }

    // Limpiar el formulario después del envío
    nombre.value = '';
    email.value = '';
    telefono.value = '';
    mensaje.value = '';
    pdfFiles.value = [];

    alert('Mensaje enviado correctamente');
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    alert('Error al enviar el mensaje. Si persiste, prueba de nuevo en unos minutos.');
  }
}
</script>

<template>
  <div class="contacto-container">
    <div class="info-contacto">
      <h1> <b>Contacto</b></h1>
      <div class="datos-contacto">
        <div class="dato">
          <div>
            <h3><b>Dirección</b> <i class="fa-solid fa-map" style="color: black; font-size: large;"></i></h3>
            <p>C. Diego de Torres, 5</p>
            <p>28805 Alcala de Henares, Madrid</p>
          </div>
        </div>
        <div class="dato">
          <div>
            <h3><b>Horario</b> <i class="fa-solid fa-clock" style="color: black; font-size: large;"></i></h3>
            <p>Lunes a Viernes:  </p>
            <p>9:00 - 14:00 | 16:00 - 19:00. </p>
          </div>
        </div>
        <div class="dato">
          <div>
            <h3><b>Teléfono</b> <i class="fa-solid fa-user" style="color: black; font-size: large;"></i></h3>
            <p><a href="tel:+34912950536">+34 912 95 05 36</a></p>
          </div>
        </div>
        <div class="dato">
          <div>
            <h3><b>Email</b> <i class="fa-solid fa-envelope" style="color: black; font-size: large;"></i></h3>
            <p><a href="duchastres60@gmail.com">duchastres60@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>

    <div class="formulario-contacto">
      <form @submit.prevent="enviarFormulario">
        <div class="form-grupo">
          <input type="text" v-model="nombre" placeholder="Nombre *" required>
        </div>
        <div class="form-grupo">
          <input type="email" v-model="email" placeholder="Email *" required>
        </div>
        <div class="form-grupo">
          <input type="tel" v-model="telefono" placeholder="Teléfono (opcional)">
        </div>
        <div class="form-grupo" v-if="mostrarCV">
          <label for="pdf-upload" class="pdf-label">
            <i class="fas fa-file"></i>&nbsp;Adjuntar mi CV (PDF)
          </label>
          <input
            type="file"
            id="pdf-upload"
            accept=".pdf"
            @change="handleFileUpload"
            class="pdf-input">
          <small class="pdf-info" v-if="pdfFiles.length > 0">
            {{ pdfFiles.length }} archivo(s) seleccionado(s)
          </small>
        </div>
        <div class="form-grupo">
          <textarea v-model="mensaje" placeholder="Mensaje *" required></textarea>
        </div>
        <button type="submit" class="submit-button">
          <i class="fa-solid fa-paper-plane"></i>
          Enviar mensaje
        </button>
      </form>
    </div>

    <div class="mapa">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.6249220943014!2d-3.3706795250006976!3d40.48356217142898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd424912b7372f4b%3A0x71d49bab96654b45!2sCalle%20Diego%20de%20Torres%2C%205%2C%2028802%20Alcal%C3%A1%20de%20Henares%2C%20Madrid!5e0!3m2!1ses!2ses!4v1756914418984!5m2!1ses!2ses"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy">
      </iframe>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.contacto-container {
  --primary: var(--color-primary, #00bcd4);
  --primary-dark: var(--color-primary-dark, #0097a7);
  --text: var(--color-text, #333);
  --muted: var(--color-text-light, #666);
  --surface: var(--color-surface, #fff);
  --bg: var(--color-bg, #f9fafa);

  font-family: 'Poppins', sans-serif;
  width: 100%;
  margin: 0;
  padding: 2rem 4rem;
  background: var(--bg);
  color: var(--text);
}

.info-contacto {
  margin-bottom: 3rem;
}

.info-contacto h1 {
  font-size: 2.3rem;
  color: var(--primary-dark);
  margin-bottom: 2rem;
  font-weight: 700;
  text-align: center;
  position: relative;
}

/* Subrayado decorativo en H1 */
.info-contacto h1::after {
  content: '';
  display: block;
  width: 120px;
  height: 4px;
  background: var(--primary);
  margin: 8px auto 0;
  border-radius: 2px;
}

.datos-contacto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.dato h3 {
  margin: 0 0 0.5rem 0;
  color: var(--primary-dark);
  font-size: 1.1rem;
}

.dato p,
.dato a {
  margin: 0;
  color: var(--muted);
  font-size: 0.95rem;
}

.dato a {
  text-decoration: none;
  transition: color 0.2s ease;
}

.dato a:hover {
  color: var(--primary);
}

/* Formulario */
.formulario-contacto {
  margin-bottom: 3rem;
}

.form-grupo {
  margin-bottom: 1.2rem;
}

input,
textarea {
  width: 100%;
  padding: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  background: var(--surface);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(0,188,212,0.15);
}

textarea {
  height: 150px;
  resize: vertical;
}

/* Botón */
button {
  background-color: var(--primary-dark);
  color: white;
  padding: 0.9rem 1.2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  transition: all 0.25s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

button:hover {
  background-color: var(--primary);
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.12);
}

button i {
  margin-right: 0.6rem;
}

/* PDF input */
.pdf-label {
  display: inline-block;
  padding: 0.7rem 1.3rem;
  background-color: #f5f5f5;
  border: 1px dashed #bbb;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.pdf-label:hover {
  background-color: #eefbfc;
  border-color: var(--primary);
  color: var(--primary-dark);
}

.pdf-input {
  display: none;
}

.pdf-info {
  display: block;
  margin-top: 0.5rem;
  color: var(--muted);
  font-size: 0.85rem;
}

/* Mapa */
.mapa {
  width: 100%;
  height: 450px;
  margin-top: 2rem;
  border-radius: 8px;
  overflow: hidden;
}

/* Responsive */
@media (max-width: 768px) {
  .contacto-container {
    padding: 1rem;
  }
}
</style>
