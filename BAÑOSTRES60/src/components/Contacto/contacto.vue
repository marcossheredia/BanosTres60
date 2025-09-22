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
            <i class="fas fa-file"></i> &nbsp Adjuntar mi CV (PDF)
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
  font-family: 'Poppins', sans-serif;
  width: 100%;
  margin: 0;
  padding: 2rem 4rem;
}

.info-contacto {
  margin-bottom: 3rem;
}

.info-contacto h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
}

.datos-contacto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.dato {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.dato i {
  font-size: 1.5rem;
  color: #1a73e8;
}

.dato h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.dato p {
  margin: 0;
  color: #666;
}

.dato a {
  color: #666;
  text-decoration: none;
}

.dato a:hover {
  color: #1a73e8;
}

.formulario-contacto {
  margin-bottom: 3rem;
}

.form-grupo {
  margin-bottom: 1.5rem;
}

input, textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  height: 150px;
  resize: vertical;
}

button {
  background-color: #F6911D;
  color: white;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: relative;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0.5px;
}

button:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 4px 8px rgba(0,0,0,0.12);
  background-color: #F6911D;
}

button i {
  margin-right: 0.7rem;
}

.mapa {
  width: 100%;
  height: 450px;
  margin-top: 2rem;
}

.pdf-label {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #f5f5f5;
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.pdf-label:hover {
  background-color: #e9e9e9;
  border-color: #1a73e8;
}

.pdf-input {
  display: none;
}

.pdf-info {
  display: block;
  margin-top: 0.5rem;
  color: #666;
}

.trabajo-toggle {
  background-color: transparent;
  color: black;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  min-width: auto;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.trabajo-toggle:hover {
  background-color: transparent;
}

@media (max-width: 768px) {
  .datos-contacto {
    grid-template-columns: 1fr;
  }
  
  .contacto-container {
    padding: 1rem;
  }
}
</style>
