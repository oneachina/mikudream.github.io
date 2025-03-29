<script setup lang="ts">
const copyIP = async () => {
  const ip = 'mikudream.9666.fun:17777'
  try {
    await navigator.clipboard.writeText(ip)
    const btn = document.querySelector('.copy-btn')
    btn?.classList.add('copy-success')
    setTimeout(() => btn?.classList.remove('copy-success'), 2000)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    alert('复制失败，请手动选择地址复制')
  }
}
</script>

<template>
  <section class="join-section" id="join">
    <div class="join-container">
      <h2 class="section-title">如何加入</h2>
      <div class="join-info">
        <div class="ip-box">
          <h3><i class="fas fa-server"></i> 服务器地址</h3>
          <button class="copy-btn" @click="copyIP">
            <span class="ip-text">mikudream.9666.fun:17777</span>
            <span class="copy-tooltip">点击复制</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/main' as *;

.join-section {
  padding: 4rem 5%;
}
</style>
