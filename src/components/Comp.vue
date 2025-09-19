<script setup>
const promoItems = [
  "👜 50% OFF on Handbags!",
  "👟 New Sneakers Just Dropped!",
  "🧥 Winter Jackets Sale!",
  "🎧 Buy 1 Get 1 Free on Headphones!",
  "👗 New Dresses in Stock!",
];
</script>

<template>
  <div class="marquee-wrapper">
    <div class="marquee-content">
      <span
        v-for="(item, index) in promoItems"
        :key="index"
        class="marquee-item text-4xl md:text-5xl font-bold"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.marquee-wrapper {
  overflow: hidden;
  white-space: nowrap;
  background-color: #f3f4f6; 
  padding: 1rem 0;
}

.marquee-content {
  display: inline-block;
  white-space: nowrap;
  animation: marquee-scroll 20s linear infinite;
}

.marquee-item {
  display: inline-block;
  margin: 0 3rem;
  color: #1f2937; 
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
