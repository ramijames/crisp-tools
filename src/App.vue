<template>
  <main class="flex flex-col">
    <div class="">
      <Header />
    </div>
    <div class="max-w-screen-2xl w-full mx-auto border-l border-r">  
      <RouterView />
    </div>
    <div class="w-full mx-auto p-6 border-t">
      <Footer />
    </div>
  </main>
</template>

<script setup>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<style scoped>

</style>

