<script setup>
import { ref } from "vue";
const pages = [
  {
    path: "/home",
    name: "Home",
  },

  {
    path: "/about",
    name: "About",
  },

  {
    path: "/project",
    name: "Project",
  },

  {
    path: "/contact",
    name: "Contact",
  },
];

const active = ref(false);

const langue = [
  {
    name: "ENG",
  },
  {
    name: "RUS",
  },
];
</script>
<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-container">
        <a href="/" class="nav__logo">Husan<span>Dev</span></a>
        <div class="nav__menu" :class="{ active: active }">
          <ul class="nav__list">
            <li
              @click="active = false"
              class="nav__list-li"
              v-for="item in pages"
              :key="item.name"
            >
              <a :href="item.path" class="nav__list-a">{{ item.name }}</a>
            </li>
            <!-- /////////////////////////////////////////// -->
            <select class="nav-langue">
              <option v-for="options in langue" :key="options.name">
                <span>
                  {{ options.name }}
                </span>
              </option>
            </select>
          </ul>
        </div>
        <div class="togler" @click="active = !active">
          <span :class="{ active: active }"></span>
          <span :class="{ active: active }"></span>
          <span :class="{ active: active }"></span>
        </div>
      </div>
    </div>
  </nav>
</template>
