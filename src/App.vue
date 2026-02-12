<script setup>
</script>

<template>
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
  </nav>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: linear-gradient(90deg, #4a90e2, #357abd);
  padding: 1rem 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background: white;
  transition: width 0.3s ease;
}

.nav a:hover {
  color: #ffdd57;
}

.nav a:hover::after {
  width: 100%;
}

.nav a.router-link-exact-active {
  font-weight: bold;
  color: #ffdd57;
}
</style>
