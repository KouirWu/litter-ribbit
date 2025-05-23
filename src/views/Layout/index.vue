<template>
  <div class="layout">
    <header class="header">
      <h1>Vue Rabbit</h1>
    </header>
    <main class="main">
      <h2>我是首页</h2>
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #409eff;
  color: white;
  padding: 1rem;
  text-align: center;
}

.main {
  flex: 1;
  padding: 2rem;
}
</style>

