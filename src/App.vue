<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import JoinSection from './components/JoinSection.vue'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <Navbar />
  <main class="container">
    <HeroSection />
    <FeaturesSection />
    <JoinSection />
  </main>
</template>

<style lang="scss">
@use '@/assets/styles/main' as *;
</style>


