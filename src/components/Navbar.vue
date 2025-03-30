<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface NavItem {
  name: string
  path: string
}

// 调整导航项顺序与页面区块对应
const navItems: NavItem[] = [
  { name: '服务器特色', path: '#features' },  // 对应FeaturesSection
  { name: '主页', path: '#hero' },           // 新增主页导航
  { name: '加入我们', path: '#join' }         // 对应JoinSection
]
</script>

<template>
  <nav class="navbar">
    <div class="nav-content">
      <RouterLink to="/" class="logo">
        <i class="fas fa-cloud"></i>
        MikuDream
      </RouterLink>
      <div class="nav-links">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  background: $gradient-primary;
  padding: 1rem 5%;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo{
    color: $text-on-gradient;
    text-shadow: 0 2px 4px rgba($miku-dark, 0.2);
    color: white;
    font-size: 1.8rem;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .nav-links {
    display: flex;
    gap: 2rem;

    a {
      color: rgba(255,255,255,0.9);
      text-decoration: none;
      transition: 0.3s;

      &:hover {
        opacity: 0.8;
        color: white;
        text-shadow: 0 0 8px rgba(255,255,255,0.6);
      }
    }
  }
}
</style>
