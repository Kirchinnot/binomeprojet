<script setup>
// Pas de logique JS nécessaire pour cet exemple
</script>

<template>
  <div class="dashboard-container">
    <h1 class="title">📊 Dashboard</h1>
    <p class="subtitle">Bienvenue dans votre espace personnel</p>
  </div>
</template>

<style scoped>
/* Fond animé en dégradé */
.dashboard-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #6a11cb, #2575fc, #ff6a00, #ff3c3c);
  background-size: 400% 400%;
  animation: gradientBG 12s ease infinite;
  color: white;
  text-align: center;
  padding: 2rem;
}

/* Animation du titre */
.title {
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 2px;
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeSlideDown 1s ease forwards;
}

/* Animation du sous-titre */
.subtitle {
  font-size: 1.3rem;
  margin-top: 1rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideUp 1s ease forwards;
  animation-delay: 0.5s;
}

/* Keyframes */
@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes fadeSlideDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeSlideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
