<template>
  <div class="post-card" @click="jumpTo">
    <div v-if="headpic" class="post-card__img" :style="{backgroundImage: `url(${headpic})`}"> </div>
    <div class="post-card__word">
      <div class="post-card__word__title"> {{data.title}} </div>
      <div class="post-card__word__description"> {{data.frontmatter.desp }}</div>
      <div class="post-card__word__foot">
        {{date}}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useThemeData } from "@vuepress/plugin-theme-data/client";
import { useRouter } from "vue-router";
import { PageData } from "vuepress";
import { AnemosThemeData } from "../../types";

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

const date = computed(() => {
  const dateString = props.data.frontmatter.date;
  try {
    if (dateString instanceof Date) {
      return dateString?.toLocaleString();
    } else if (dateString) {
      const [step1, _] = dateString.split('T');
      const [step2, __] = _.split('.');
      return `${step1} ${step2}`;
    } else {
      return ""
    }
  } catch {
    return ""
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
  background-color: rgba(255, 255, 255, 0);
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
    margin-right: 15px;
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
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .post-card__word__foot {
      margin-top: 0.5rem;
      color: $text-dim-color;
    }
  }
}

@media (max-width: 767px) {
  .post-card {
    margin-bottom: 2rem;
    display: block;
    height: auto;
    border-bottom: solid 1px $line-dim-color;

    .post-card__img {
      height: 150px;
      width: 100%;
      margin-bottom: 16px;
    }

    .post-card__word__title {
      font-size: 1.25rem;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0.25rem;
    }
  }
}
</style>