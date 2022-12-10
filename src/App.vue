<script setup lang="ts">
import { useRingCalc } from './composables/useRingCalc'
import ItemFieldList from './components/ItemFieldList/index.vue'
import RingList from './components/RingList/index.vue'
const { lenses, filters, ringsToBuyMore } = useRingCalc()
</script>

<template>
  <div class="max-w-xl mx-auto py-20">
    <header>
      <h1 class="text-xl font-bold">ステップアップリング計算機</h1>
      <p class="mt-3">手持ちのレンズとフィルターから、必要なステップアップリングを計算</p>
    </header>

    <div class="mt-10">
      <ItemFieldList
        listTitle="レンズ"
        :items="lenses"
        @changeItems="newItems => lenses = newItems"
      />
    </div>

    <div class="mt-10">
      <ItemFieldList
        listTitle="フィルター"
        :items="filters"
        @changeItems="newItems => filters = newItems"
      />
    </div>

    <div class="mt-10">
      <RingList :rings="ringsToBuyMore" />
    </div>
  </div>
</template>
