<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer-content">
      Base VuePress by
      <a href="https://github.com/Tackoil/vuepress-theme-anemos">Anemos</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/css/variable";

.footer-content {
  padding-top: 3rem;
  padding-bottom: 1rem;
  text-align: center;
  color: $text-dim-color;
  background-color: transparent;

  a {
    color: inherit;
  }
}
</style>
