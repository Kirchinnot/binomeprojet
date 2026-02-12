<script setup>


</script>


<template>
  <div class="about-container">
    <div class="about-card">
      <h1>Bienvenue sur ma page About 🌊</h1>
      <p>En collaboration avec BIGIIIII ❤👍</p>
    </div>
  </div>
</template>



<style scoped>
.about-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #00c6ff, #0072ff);
  position: relative;
  overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
}

/* Effet vague douce */
.about-container::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 200px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  transform: translateX(-25%) translateY(50%);
}

/* Carte centrale */
.about-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 3rem 4rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  z-index: 2;
}

.about-card h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #005f99;
}

.about-card p {
  font-size: 1.2rem;
  color: #333;
}
</style>
