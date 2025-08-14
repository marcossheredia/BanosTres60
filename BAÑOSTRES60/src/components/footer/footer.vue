<script setup>
const currentYear = new Date().getFullYear();
const logoPath = new URL('@/assets/imagenes/usoGeneral/Logo verde.png', import.meta.url).href;
</script>

<template>
  <div class="footer-wrapper">
    <div class="divider"></div>
    <v-footer class="bg-custom py-2">
      <v-container>
        <v-row justify="center" align="center" class="mb-2">
          <!-- Logo -->
          <v-col cols="12" sm="auto" class="text-center mb-4 mb-sm-0">
            <v-img
              :src="logoPath"
              alt="SSAB450 - Especialistas en acero inoxidable"
              width="150"
              height="auto"
              class="mx-auto"
              contain
            />
          </v-col>
          
          <!-- Enlaces y contacto -->
          <v-col cols="12" sm="auto" class="d-flex flex-column flex-sm-row align-center">
            <v-btn
              href="/aviso-legal-y-politicas"
              variant="text"
              class="footer-link my-1 my-sm-0 mx-sm-2"
            >
              Aviso Legal
            </v-btn>
            
            <v-divider vertical class="d-none d-sm-block mx-4" color="white"></v-divider>
            <v-divider class="d-block d-sm-none my-2" color="white" width="80%"></v-divider>
            
            <v-btn
              href="mailto:duchastres60@gmail.com"
              variant="text"
              class="footer-link my-1 my-sm-0 mx-sm-2"
            >
              <v-icon start size="small" class="mr-1">mdi-email-outline</v-icon>
              duchastres60@gmail.com
            </v-btn>
            
            <v-divider vertical class="d-none d-sm-block mx-4" color="white"></v-divider>
            <v-divider class="d-block d-sm-none my-2" color="white" width="80%"></v-divider>
            
            <v-btn
              href="tel:+34661805952"
              variant="text"
              class="footer-link my-1 my-sm-0 mx-sm-2"
            >
              <v-icon start size="small" class="mr-1">mdi-phone</v-icon>
              +34 661 80 59 52
            </v-btn>
          </v-col>
        </v-row>

        <v-row justify="center" align="center">
          <v-col cols="12" class="text-center copyright-text">
            Copyright © {{ currentYear }} BAÑOS TRES60  - Todos los derechos reservados
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<style scoped>
.bg-custom {
  background-color: #808990 !important;
}

.footer-link {
  color: white !important;
  text-transform: none !important;
  font-size: 0.9rem !important;
  white-space: nowrap;
}

.footer-link:hover {
  opacity: 0.8;
}

.footer-wrapper {
  position: relative;
  width: 100%;
}

.divider {
  position: relative;
  width: 100%;
  height: 3px;
  background-color: #F6911D;
  margin: 0;
}

.copyright-text {
  color: white;
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .footer-link {
    font-size: 0.85rem !important;
  }
  
  .copyright-text {
    font-size: 0.8rem;
  }
}
</style>