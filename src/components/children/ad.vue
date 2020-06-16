<template>
  <div class="ad">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
      </div>
      <!-- Add Arrows -->
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  mounted() {
    /* eslint-disable no-new */
    new Swiper(".swiper-container", {
      loop: true,
      // 如果需要分页器
      pagination: ".swiper-pagination",
      // 如果需要前进后退按钮
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      // 如果需要滚动条
      scrollbar: ".swiper-scrollbar",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    });
  }
};
</script>

<style lang="" scoped>
/* @import'Swiper'; */
.ad {
  position: sticky;
  top: 0;
}
.swiper-container {
  background-color:snow;
  width: 50%;
  height: 300px;
}
</style>