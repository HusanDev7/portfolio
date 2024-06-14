<script setup>
import { ref, onMounted } from "vue";
import HeaderLayouts from "@/layouts/headerLayouts/HeaderLayouts.vue";
// import FooterLayouts from './layouts/footerLayouts/FooterLayouts.vue';

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
  return {
    loading,
  };
});
</script>

<template>
  <!-- loading web-sayt -->
  <div class="atom-spinner-bg" v-if="loading">
    <div class="atom-spinner">
      <div class="atom-spinner-inner">
        <div class="atom-spinner-line"></div>
        <div class="atom-spinner-line"></div>
        <div class="atom-spinner-line"></div>
        <div class="atom-spinner-circle">&#9679;</div>
      </div>
    </div>
  </div>
  <!-- loading web-sayt -->

  <!-- background particles  -->
  <div class="patricles" v-else>
    <vue-particles
      id="tsparticles"
      :particlesLoaded="particlesLoaded"
      :options="{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#55e6a5',
          },
          links: {
            color: '#fff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: 'bounce',
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }"
    />
  </div>
  <!-- backgraund particles  -->
  <div class="wrapper">
    <HeaderLayouts />
    <!-- <FooterLayouts /> -->
  </div>
</template>
