<template>
  <section class="features-section" id="features">
    <div class="features-container">
      <h2 class="section-title">服务器特色</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3><i class="fas fa-shield-alt"></i> 生电特性</h3>
          <p>服务器支持TNT、地毯复制等特性，让红石玩家尽情发挥创意，打造各种实用机器。</p>
        </div>
        <div class="feature-card">
          <h3><i class="fas fa-bolt"></i> 极速体验</h3>
          <p>顶级服务器配置，延迟低于50ms</p>
        </div>
        <div class="feature-card">
          <h3><i class="fas fa-sync"></i> 每日备份</h3>
          <p>自动数据备份保障游戏进度安全</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/main' as *;

.features-section {
  padding: 4rem 5%;
  background: white;

  .section-title {
    text-align: center;
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 3rem;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .feature-card {
    background: #ffffff;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    border: 1px solid rgba(106, 17, 203, 0.1);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(106, 17, 203, 0.15);
    }

    h3 {
      color: #39c5bb;
      margin-bottom: 1rem;
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;

      i {
        font-size: 1.2em;
      }
    }

    p {
      color: #666;
      line-height: 1.6;
      min-height: 4.5em; // 保持卡片高度一致
    }
  }

  @media (max-width: #{$breakpoint-mobile}) {
    padding: 2rem 5%;

    .section-title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .feature-grid {
      grid-template-columns: 1fr;
    }

    .feature-card {
      padding: 1.5rem;

      h3 {
        font-size: 1.3rem;
      }
    }
  }
}
</style>
