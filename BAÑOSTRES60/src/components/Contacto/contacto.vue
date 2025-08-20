<script setup>
import { ref } from 'vue';

const nombre = ref('');
const email = ref('');
const telefono = ref('');
const mensaje = ref('');
const pdfFiles = ref([]);
const mostrarCV = ref(false);

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
    const formData = new FormData();
    formData.append('to', 'annihilux20@gmail.com');
    formData.append('from', email.value);
    formData.append('subject', `Nuevo mensaje de contacto de ${nombre.value}`);
    formData.append('text', `
      Nombre: ${nombre.value}
      Email: ${email.value}
      ${telefono.value ? `Teléfono: ${telefono.value}` : ''}
      Mensaje: ${mensaje.value}
    `);
    
    pdfFiles.value.forEach(file => {
      formData.append('pdfs', file);
    });
    
    // Aquí iría la lógica de envío del email
    console.log('Enviando email:', formData);
    
    // Limpiar el formulario después del envío
    nombre.value = '';
    email.value = '';
    telefono.value = '';
    mensaje.value = '';
    pdfFiles.value = [];
    
    alert('Mensaje enviado correctamente');
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    alert('Error al enviar el mensaje');
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
            <p>C. Manolo, 666</p>
            <p>28805 Alcala de Henares, Madrid</p>
          </div>
        </div>
        <div class="dato">
          <div>
            <h3><b>Horario</b> <i class="fa-solid fa-clock" style="color: black; font-size: large;"></i></h3>
            <p>Lunes a Viernes: cuando me salga de los cojones. </p>
          </div>
        </div>
        <div class="dato">
          <div>
            <h3><b>Teléfono</b> <i class="fa-solid fa-user" style="color: black; font-size: large;"></i></h3>
            <p><a href="tel:+34913005422">+34 661 80 59 52</a></p>
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
        <div class="trabajo-button">
          <button type="button" @click="mostrarCV = !mostrarCV" class="trabajo-toggle">
            ¿Quieres trabajar con nosotros?
          </button>
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.3261342271387!2d-3.8497377!3d40.125439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41e1f7b87bc6cf%3A0x89df524f8345d6e3!2sC.%20Tejo%2C%2012%2C%2045200%20Illescas%2C%20Toledo!5e0!3m2!1ses!2ses!4v1699999999999!5m2!1ses!2ses"
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