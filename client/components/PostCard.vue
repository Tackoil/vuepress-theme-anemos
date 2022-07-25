<template>
  <div class="post-card" @click="jumpTo">
    <div v-if="headpic" class="post-card__img" :style="{backgroundImage: `url(${headpic})`}"> </div>
    <div class="post-card__word">
      <div class="post-card__word__title"> {{data.title}} </div>
      <div class="post-card__word__description"> {{data.frontmatter.desp }}</div>
      <div class="post-card__word__foot">
        {{data.frontmatter.date}}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PageData} from "vuepress";
import {computed} from "@vue/reactivity";
import {useThemeData} from "@vuepress/plugin-theme-data/lib/client";
import {AnemosThemeData} from "../../types";
import {useRouter} from "vue-router";

interface Props {
  data: PageData
}

const props = defineProps<Props>();
const router = useRouter();
const themeData = useThemeData<AnemosThemeData>();

const headpic = computed(() => {
  if (props.data.frontmatter.headpic) {
    return props.data.frontmatter.headpic;
  } else if (themeData.value.headpic) {
    return themeData.value.headpic;
  } else {
    return "";
  }
})

function jumpTo() {
  router.push(props.data.path);
}


</script>

<style lang="scss" scoped>
@import '../assets/css/variable';

.post-card {
  display: flex;
  height: 160px;
  margin: 1.25rem 0;
  background-color: rgba(255,255, 255, 0);
  box-shadow: none;
  transition: background-color 0.7s;

  &:hover {
    background-color: rgba($main-color, 0.1);

    .post-card__img {
      box-shadow: none;
    }
  }

  .post-card__img {
    width: 30%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
    border-radius: 0.25rem;
    margin:0 15px;
    transition: box-shadow .7s;
  }

  .post-card__word {
    padding: 0.5rem;
    flex: 1;
    .post-card__word__title {
      color: $text-color;
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.4;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0.25rem;
    }
    .post-card__word__description {
      text-indent: 2em;
    }
    .post-card__word__foot {
      margin-top: 0.5rem;
    }
  }
}
</style>