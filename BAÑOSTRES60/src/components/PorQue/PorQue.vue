<script setup>
defineOptions({
  name: 'PorQueSection'
})
</script>

<template>
  <section class="por-que-section">
    <div class="por-que-container">
      <h1>Por que elegir Banos Tres60</h1>
      <p class="intro">
        Combinamos experiencia, calidad y cercania para que tu reforma sea segura,
        rapida y sin sorpresas.
      </p>

      <div class="cards">
        <article class="card">
          <h2>Mas de 20 anos de experiencia</h2>
          <p>Soluciones probadas para cada tipo de bano y necesidad.</p>
        </article>

        <article class="card">
          <h2>Presupuesto claro y cerrado</h2>
          <p>Te explicamos cada partida para que sepas exactamente que contratas.</p>
        </article>

        <article class="card">
          <h2>Instalacion profesional</h2>
          <p>Materiales de calidad y acabados cuidados al detalle.</p>
        </article>

        <article class="card">
          <h2>Trato cercano</h2>
          <p>Te acompanamos en todo el proceso, de la visita al resultado final.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.por-que-section {
  padding: clamp(40px, 7vw, 72px) 2rem;
  background: #f6f8f9;
}

.por-que-container {
  max-width: 1100px;
  margin: 0 auto;
}

h1 {
  color: #0d3642;
  font-size: clamp(28px, 4vw, 44px);
  margin: 0 0 1rem;
}

.intro {
  color: #23424a;
  font-size: 1.05rem;
  line-height: 1.6;
  max-width: 760px;
  margin: 0 0 2rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.card {
  background: #ffffff;
  border: 1px solid #dce5e7;
  border-radius: 14px;
  padding: 1rem;
}

.card h2 {
  color: #0d3642;
  font-size: 1.1rem;
  margin: 0 0 0.6rem;
}

.card p {
  color: #23424a;
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .por-que-section {
    padding: 3rem 1.5rem;
  }

  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
