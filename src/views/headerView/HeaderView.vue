<script setup>
import IconGithub from "@/components/icons/IconGithub.vue";
import IconTelegram from "@/components/icons/IconTelegram.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import { onMounted, ref } from "vue";

const texts = ref(["Front End Developer", "Mnemonist", "Freelancer"]);
const currentIndex = ref(0);
const currentText = ref("");
const currentCharIndex = ref(0);
const isDeleting = ref(false);

const typeText = () => {
  if (
    !isDeleting.value &&
    currentCharIndex.value < texts.value[currentIndex.value].length
  ) {
    currentText.value +=
      texts.value[currentIndex.value][currentCharIndex.value];
    currentCharIndex.value++;
  } else if (isDeleting.value && currentText.value !== "") {
    currentText.value = currentText.value.slice(0, -1);
    currentCharIndex.value--;
  } else {
    isDeleting.value = !isDeleting.value;
    if (!isDeleting.value) {
      currentIndex.value = (currentIndex.value + 1) % texts.value.length;
      currentCharIndex.value = 0;
    }
  }
};

onMounted(() => {
  setInterval(typeText, 300);
});
</script>

<template>
  <section class="header">
    <div class="container">
      <div class="header-box">
        <div class="header-box-desc">
          <h3 class="header-box-title">
            Hi, I'm Shomurodov <span class="header-box-logo-name">Husan</span>
          </h3>
          <h1 class="header-box-info">
            I'm a
            <span class="header-box-info-rann-txt">{{ currentText }}</span>
            <span class="cursor">&nbsp;</span>
          </h1>

          <p class="header-box-info-about">
            Welcome to my portfolio of captivating digital experiences.
            <span class="about-color">
              Explore my work and let's create something extraordinary together.
            </span>
          </p>
          <!-- links to telegram and GitHub also Linkidin -->
          <div class="header-box-info-about-media">
            <div class="icon-wrapper">
              <IconGithub size="30" />
            </div>
            <div class="icon-wrapper">
              <IconTelegram size="30" />
            </div>
            <div class="icon-wrapper">
              <IconLinkedin size="30" />
            </div>
          </div>
        </div>

        <div class="header-box-info">
          <div class="header-box-info-wrapper">
            <img
              class="header-box-info-logo"
              src="@/assets/img/vuejs-3d-logo.png"
              alt=""
            />
            <img
              class="header-box-info-img"
              src="@/assets/img/me-brain-creat.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
