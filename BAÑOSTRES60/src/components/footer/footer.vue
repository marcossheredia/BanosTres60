<script setup>
defineOptions({ name: 'AppFooter' })

const currentYear = new Date().getFullYear();
const logoPath = new URL('@/assets/imagenes/usoGeneral/Logo_BN_nf.png', import.meta.url).href;
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
              alt="BAÑOS TRES60"
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

            <div class="footer-link footer-link-static my-1 my-sm-0 mx-sm-2">
              <v-icon start size="small" class="mr-1">mdi-email-outline</v-icon>
              duchastres60@gmail.com
            </div>

            <v-divider vertical class="d-none d-sm-block mx-4" color="white"></v-divider>
            <v-divider class="d-block d-sm-none my-2" color="white" width="80%"></v-divider>

            <div class="footer-link footer-link-static my-1 my-sm-0 mx-sm-2">
              <v-icon start size="small" class="mr-1">mdi-phone</v-icon>
              +34 661 80 59 52
            </div>
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
.footer-wrapper {
  position: relative;
  width: 100%;
  font-family: 'Poppins', sans-serif;
}

.divider {
  position: relative;
  width: 100%;
  height: 3px;
  background-color: var(--color-primary, #00bcd4); /* Línea superior cian */
  margin: 0;
}

.bg-custom {
  background-color: #0B2A33 !important; /* Azul verdoso oscuro (mejor contraste con el cian) */
}

.footer-link {
  color: #fff !important; /* texto en blanco */
  text-transform: none !important;
  font-size: 0.9rem !important;
  white-space: nowrap;
  transition: all 0.3s ease;
  font-weight: 500;
}

.footer-link:hover {
  color: var(--color-primary, #00bcd4) !important; /* hover en cian */
  transform: translateY(-2px);
}

.footer-link-static {
  display: inline-flex;
  align-items: center;
}

.copyright-text {
  color: #fff;
  font-size: 0.9rem;
  opacity: 0.85;
  margin-top: 1rem;
}

/* Iconos alineados mejor */
.v-icon {
  margin-right: 0.4rem;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-link {
    font-size: 0.95rem !important;
    white-space: normal;
    text-align: center;
    line-height: 1.45;
  }

  .footer-link-static {
    justify-content: center;
    width: 100%;
  }

  .copyright-text {
    font-size: 0.8rem;
    margin-top: 0.6rem;
    padding: 0 0.5rem;
  }
}

</style>
