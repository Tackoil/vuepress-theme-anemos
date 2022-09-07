import { defineClientConfig } from '@vuepress/client';
import { useRouter } from "vue-router";
import Layout from './layouts/Layout.vue';
import NotFound from './layouts/NotFound.vue';
import { scrollTo } from './utils/motion';

export default defineClientConfig({
  layouts: {
    Layout,
    NotFound,
  },
  setup() {
    const router = useRouter();
    router.beforeEach((from, to, next) => {
      scrollTo(0, next);
    })
  }
})