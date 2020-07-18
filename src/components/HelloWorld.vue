
<template>
  <h1>{{ newMsg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script setup="props" lang="ts">
import { computed, ref, watchEffect } from "vue"

declare const props: {
  msg: string
}

export const newMsg = computed(() => props.msg + '!!!')
export const count = ref(0)

watchEffect(() => console.log(count.value))
</script>


