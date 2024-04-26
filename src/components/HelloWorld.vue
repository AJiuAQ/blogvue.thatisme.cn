<script setup lang="ts">
import { ref } from 'vue'
import variables from "@/styles/variables.module.scss"

import { useCounterStore } from "@/store/counter"

const counterStore = useCounterStore()

console.log(variables.bgColor)

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <el-card class="text-left text-white border-white border-1 border-solid mt-10 bg-[#242424]">
    <template #header> 子组件 HelloWorld.vue</template>
    <el-form>
      <el-form-item label="数字：">{{ counterStore.count }}</el-form-item>
      <el-form-item label="数字：">{{ counterStore.double }}</el-form-item>
    </el-form>
  </el-card>
  <!--  <h1 class="text-red">{{ msg }}</h1>-->

  <!--  <div class="card">-->
  <!--    <button type="button" @click="count++">count is {{ count }}</button>-->
  <!--    <p>-->
  <!--      Edit-->
  <!--      <code>components/HelloWorld.vue</code> to test HMR-->
  <!--    </p>-->
  <!--  </div>-->

  <!--  <p>-->
  <!--    Check out-->
  <!--    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"-->
  <!--    >create-vue</a-->
  <!--    >, the official Vue + Vite starter-->
  <!--  </p>-->
  <!--  <p>-->
  <!--    Install-->
  <!--    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>-->
  <!--    in your IDE for a better DX-->
  <!--  </p>-->
  <!--  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>-->
  <!--  &lt;!&ndash; src/components/HelloWorld.vue &ndash;&gt;-->
  <!--  <div>-->
  <!--    <el-button type="success">-->
  <!--      <i-ep-SuccessFilled/>-->
  <!--      Success-->
  <!--    </el-button>-->
  <!--    <el-button type="info">-->
  <!--      <i-ep-InfoFilled/>-->
  <!--      Info-->
  <!--    </el-button>-->
  <!--    <el-button type="warning">-->
  <!--      <i-ep-WarningFilled/>-->
  <!--      Warning-->
  <!--    </el-button>-->
  <!--    <el-button type="danger">-->
  <!--      <i-ep-WarnTriangleFilled/>-->
  <!--      Danger-->
  <!--    </el-button>-->
  <!--  </div>-->
  <!--  <div>-->
  <!--    <el-button type="info">-->
  <!--      <svg-icon icon-class="hua"/>-->
  <!--      SVG 本地图标-->
  <!--    </el-button>-->
  <!--  </div>-->
  <!--  <div class="box"></div>-->
  <!--  <br>-->
  <!--  <div style="width:100px;height:100px" :style="{ 'background-color': variables.bgColor }"/>-->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

<style lang="scss">
.box {
  width: 100px;
  height: 100px;
  background-color: $bg-color;
}
</style>