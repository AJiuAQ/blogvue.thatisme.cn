<script setup lang="ts">
/*import HelloWorld from '@/components/HelloWorld.vue'

import { useCounterStore } from "@/store/counter.ts"

const counterStore = useCounterStore()*/

import { useAppStore, useSettingsStore } from "@/store";
import defaultSettings from "@/settings";
import { ThemeEnum } from "@/enums/ThemeEnum";
import { SizeEnum } from "@/enums/SizeEnum";

const appStore = useAppStore();
const settingsStore = useSettingsStore();

const locale = computed(() => appStore.locale);
const size = computed(() => appStore.size as SizeEnum);
const watermarkEnabled = computed(() => settingsStore.watermarkEnabled);

// 明亮/暗黑主题水印字体颜色适配
const fontColor = computed(() => {
  return settingsStore.theme === ThemeEnum.DARK
      ? "rgba(255, 255, 255, .15)"
      : "rgba(0, 0, 0, .15)";
});
</script>

<template>
  <el-config-provider :locale="locale" :size="size">
    <!-- 开启水印 -->
    <el-watermark
        v-if="watermarkEnabled"
        :font="{ color: fontColor }"
        :content="defaultSettings.watermarkContent"
        class="wh-full"
    >
      <router-view />
    </el-watermark>
    <!-- 关闭水印 -->
    <router-view v-else />
  </el-config-provider>
  <!--  <div>-->
  <!--    <a href="https://vitejs.dev" target="_blank">-->
  <!--      <img src="/vite.svg" class="logo" alt="Vite logo" />-->
  <!--    </a>-->
  <!--    <a href="https://vuejs.org/" target="_blank">-->
  <!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
  <!--    </a>-->
  <!--  </div>-->
<!--  <h1 class="text-3xl">vue3-element 父组件</h1>
  <el-button type="primary" @click="counterStore.increment">count++</el-button>
  <HelloWorld msg="Vite + Vue"/>-->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
