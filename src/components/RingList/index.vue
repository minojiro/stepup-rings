<script setup lang="ts">
import {Ring} from '../../types'

const props = defineProps<{
  rings: Ring[]
}>()
</script>

<template>
  <div class="rounded border border-2 border-info p-5">
    <p class="font-bold">必要なステップアップリング</p>
    <ul>
      <li v-if="props.rings.length === 0" class="mt-3">？？？</li>
      <li v-for="(ring, i) in props.rings" :key="i" class="mt-3">
        {{ring.diameterFrom}} => {{ring.diameterTo}}
      </li>
    </ul>
  </div>
</template>
