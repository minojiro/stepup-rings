<script setup lang="ts">
import ItemField from '../ItemField/index.vue'

type Item = {
  name: string
  diameter: number
}

const props = defineProps<{
  listTitle: string
  items: {
    name: string
    diameter: number
  }[]
}>()

const emits = defineEmits<{(e: 'changeItems', value: Item[]): void}>()

const handleAdd = () => {
  const newItem = { name: '', diameter: 0 }
  emits('changeItems', [ ...props.items, newItem ])
}

const handleRemove = (index: number) => {
  emits('changeItems', props.items.filter((_,i) => i !== index))
}

const handleChangeItem = (index: number, newValue: Item) => {
  emits('changeItems', props.items.map((item, i) => i === index ? newValue : item))
}
</script>

<template>
  <div class="rounded bg-base-200 p-5">
    <p class="font-bold">{{ props.listTitle }}</p>
    <ul class="my-3">
      <li v-if="props.items.length === 0" class="py-3">項目がありません。追加してください</li>
      <li v-for="(item, i) in props.items" :key="i" class="mb-3">
        <ItemField
          :item="item"
          @remove="() => handleRemove(i)"
          @changeItem="(item: Item) => handleChangeItem(i, item)"
        />
      </li>
    </ul>
    <p>
      <button @click="handleAdd" type="button" class="btn">追加</button>
    </p>
  </div>
</template>
