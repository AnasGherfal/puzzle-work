<script setup lang="ts">
import footerPage from "@/views/HomePage/footer.vue";
</script>

<template>
  <v-app-bar
    class="ss"
    style="
      border-radius: 10px;
      background-color: rgba(255, 163, 30, 0.8);

      backdrop-filter: blur(10px);
    "
    color="#ffa31e"
    name="app-bar"
  >
    <div style="display: flex; flex-wrap: nowrap; align-items: center">
      <logo logoSrc="logo.png" style="width: 10rem; margin-top: 0.5rem" />
      <div class="nav-links">
        <nuxt-link to="/" class="nuxt">
          <span>الرئيسية</span>
        </nuxt-link>
        <nuxt-link class="nuxt" to="/about">
          <span>من نحن</span>
        </nuxt-link>
        <nuxt-link class="nuxt" to="/course">
          <span>كورسات</span>
        </nuxt-link>
      </div>
    </div>
  </v-app-bar>

  <v-main>
    <slot />
  </v-main>

  <v-footer
    style="
      background-color: #ffa31e;
      backdrop-filter: blur(10px);
      border-radius: 10px;
    "
  >
    <footerPage />
  </v-footer>
</template>

<style>
.nav-links {
  display: flex;
  justify-content: space-between;
  flex: 1;
}
.nuxt {
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  padding: 0 10px;
}
/* Hover effect for .nuxt class */

.nuxt {
  color: #fff;
  transition: all 0.3s;
  position: relative;
}
.nuxt span {
  transition: all 0.3s;
}
.nuxt::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: rgba(255, 255, 255, 0.5);
  border-bottom-color: rgba(255, 255, 255, 0.5);
  transform: scale(0.1, 1);
}
.nuxt:hover span {
  letter-spacing: 3px;
}
.nuxt:hover::before {
  opacity: 1;
  transform: scale(1, 1);
}
.nuxt::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.3s;
}
.nuxt:hover::after {
  opacity: 0;
  transform: scale(0.1, 1);
}
</style>
