import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", () => {
  // ref变量 → state 属性
  const count = ref(0)
  const double = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  return {count, double, increment}
})