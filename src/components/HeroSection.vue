<script setup lang="ts">

</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>开启你的生电之旅</h1>
      <div class="version">当前版本：1.21.4</div>
      <p>在线玩家: 114514</p>
      <RouterLink to="#join" class="cta-button">立即加入服务器</RouterLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  @include miku-wave-divider;
  &::after {
    background-size: cover;
  }
  height: 100vh;
  background: $gradient-primary;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 5%;
  margin-top: 60px;

  .hero-content {
    max-width: 800px;
    color: white;

    h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    }

    .version {
      background: rgba(255,255,255,0.15);
      padding: 0.5rem 1rem;
      border-radius: 50px;
      display: inline-block;
      margin: 1rem 0;
    }

    .cta-button {
      box-shadow: 0 4px 15px rgba($miku-dark, 0.3);
      background: $gradient-accent;
      color: white;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      text-decoration: none;
      display: inline-block;
      margin-top: 2rem;
      transition: transform 0.3s;

      &:hover {
        box-shadow: 0 6px 20px rgba($miku-dark, 0.4);
      }
    }
  }
}
</style>
